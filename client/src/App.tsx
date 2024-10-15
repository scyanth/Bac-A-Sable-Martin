import "./App.css";
import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import RepoCard from "./components/RepoCard";
import { Repo } from "./types/RepoType";
import { Lang } from "./types/LangType";

const getReposandLangs = gql`
  query GetReposandLangs {
    getRepos {
      id
      isFavorite
      name
      url
      languages {
        label
      }
    }
    getLangs {
      label
    }
  }
`;

function App() {
  const { loading, error, data, refetch } = useQuery(getReposandLangs);

  const [selectedLang, setSelectedLang] = useState<string | null>(null);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error !</h1>;

  const reposFilter = (langLabel: string | null) => {
    if (langLabel) {
      return data.getRepos.filter((repo: Repo) =>
        repo.languages.some((lang) => lang.label === langLabel)
      );
    } else {
      return data.getRepos;
    }
  };

  const filteredRepos = reposFilter(selectedLang);

  return (
    <main>
      <header>
        <h2>Mes repos Github</h2>
        <button onClick={() => setSelectedLang(null)}>
          {" "}
          Tous les langages{" "}
        </button>
        {data.getLangs.map((lang: Lang) => (
          <button onClick={() => setSelectedLang(lang.label)}>
            {lang.label}
          </button>
        ))}
      </header>
      <div className="reposContainer">
        {filteredRepos.map((repo: Repo) => (
          <RepoCard
            key={repo.id}
            name={repo.name}
            url={repo.url}
            languages={repo.languages}
            id={repo.id}
            isFavorite={repo.isFavorite}
          />
        ))}
      </div>
      <button onClick={() => refetch()}>Rafraîchir</button>
    </main>
  );
}

export default App;
