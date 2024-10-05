import { dataSource } from "./client";
import { Lang } from "../entities/lang";
import { Status } from "../entities/status";
import { Repo } from "../entities/repo";
import raw from "../../data/raw.json";

type RepoType = {
    id: string;
    name: string;
    url: string;
    isPrivate: number;
}
  
type LangType = {
    id: number;
    label: string;
}
  
type LangBy = { repo_id: string; lang_id: number}

type LangRaw = { node: { name: string}}

(async() => {
    try {

        await dataSource.initialize();
        const queryRunner = dataSource.createQueryRunner();

        await queryRunner.startTransaction();
        await queryRunner.query("DELETE FROM repo_languages_lang");
        await queryRunner.query("DELETE FROM lang");
        await queryRunner.query("DELETE FROM repo");
        await queryRunner.query("DELETE FROM status");

        await queryRunner.query('DELETE FROM sqlite_sequence WHERE name="status" OR name="lang"');

        const repos: RepoType[] = raw.map((rep: { id: string; isPrivate: boolean; name: string; url: string}) => ({
            id: rep.id,
            isPrivate: rep.isPrivate ? 1 : 2,
            name: rep.name,
            url: rep.url
        }));

        const langs: LangType[] = [];
        const lang_by_repo: LangBy[] = [];
        let langId: number = 1;
        raw.forEach((rep: any) => {
          rep.languages.forEach((lang: LangRaw) => {
            if (!langs.some((lg: LangType) => lg.label === lang.node.name)) {
              langs.push({id: langId, label: lang.node.name });
              langId++;
            }
            const myLang = langs.find((lg: LangType) => lg.label === lang.node.name) as LangType
            lang_by_repo.push({ repo_id: rep.id, lang_id: myLang.id})
          })
        });

        const status = [
            { "id": 1, "label": "Privé" },
            { "id": 2, "label": "Public" }
        ];

        const savedlangs = await Promise.all(
            langs.map(async (el) => {
              const lang = new Lang();
              lang.label = el.label;
      
              return await lang.save();
            })
        );
      
        console.log(savedlangs);
    
        const savedStatus = await Promise.all(
            status.map(async (el) => {
                const status = new Status();
                status.label = el.label;
        
                return await status.save();
            })
        );
    
        console.log(savedStatus);
    
        const savedRepos = await Promise.all(
            repos.map(async (el) => {
                const repo = new Repo();
                repo.id = el.id;
                repo.name = el.name;
                repo.url = el.url;
        
                const status = savedStatus.find((st) => st.id === el.isPrivate) as Status;
                repo.status = status;
        
                const mylangs = savedlangs.filter((svLg) => {
                    const associatedlang = lang_by_repo.filter(lgbyrep => lgbyrep.repo_id === el.id);
                    const langLabel = langs.filter(lg => associatedlang.some((assolg) => assolg.lang_id === lg.id));
                    return langLabel.some(lgLabel => lgLabel.label === svLg.label)
                })
                repo.languages = mylangs;
        
                return await repo.save();
            })
        );

        console.log(savedRepos);

        await queryRunner.commitTransaction();

    } catch (error) {
        console.log(error);
    }
})();