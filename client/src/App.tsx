import './App.css';
// import { useEffect, useState } from "react";
// import connexion from "./services/connexion";
import { useQuery, gql  } from "@apollo/client";
import RepoCard from "./components/RepoCard";
import { Repo } from "./types/RepoType";
// import { Lang } from "./types/LangType";

const getRepos = gql`
  query GetRepos {
    getRepos {
      id
      isFavorite
      name
      url
    }
  }
`;

function App() {

  const { loading, error, data, refetch } = useQuery(getRepos);

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error !</h1>

  // const [repos, setRepos] = useState<Repo[]>([]);
  // const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  // const [langs, setLanguages] = useState<Lang[]>([]);

  // useEffect(() => {
  //   console.log("I'm the useEffect");
  //   const fetchRepos = async () => {
  //     try {
  //       // const repos = await connexion.get<Repo[]>("/api/repos");
  //       const repos = await useQuery(gql`
  //         query getRepos {
  //           repos {
  //             id, name, url, languages, isFavorite
  //           }
  //         }
  //       `)
  //       // const langs = await connexion.get<Lang[]>("/api/langs");
  //       const langs = await useQuery(gql`
  //         query getLangs {
  //           langs {}
  //         }
  //       `)
  //       setRepos(repos.data);
  //       setFilteredRepos(repos.data);
  //       setLanguages(langs.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchRepos();
  // }, []);

  // const reposFilter = (lang_label : string) => {
  //   const filteredRepos = repos.filter((repo) => 
  //     repo.languages.some(lang => 
  //       (lang.label === lang_label))
  //   );
  //   setFilteredRepos(filteredRepos);
  // };

  // const reposReset = () => {
  //   setFilteredRepos(repos);
  // };

  return (
    <main>
      <header>
        <h2>Mes repos Github</h2>
      </header>
      <div className='reposContainer'>
        {data.getRepos.map((repo: Repo) => (
          <RepoCard name={repo.name} url={repo.url} languages={repo.languages} id={repo.id} isFavorite={repo.isFavorite} />
        ))}
      </div>
      <button onClick={() => refetch()}>Rafraîchir</button>
    </main>
  )
}

export default App;
