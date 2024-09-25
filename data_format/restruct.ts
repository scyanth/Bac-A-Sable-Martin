import * as fs from 'fs';

const data = JSON.parse(fs.readFileSync("raw.json", "utf-8"));

const repos_table = [];
let fid : number = 1;

for (const repo of data){
    let repo_formate = {
        id : fid,
        name : repo.name,
        url : repo.url,
    };
    repos_table.push(repo_formate);
    fid++;
}

// for (const entree of data){
//     let lang_label = entree.languages;
//     if (!(lang_label)){
//         lang_label = " ";
//     }
//     console.log(entree.languages);
// }

//console.log(data);