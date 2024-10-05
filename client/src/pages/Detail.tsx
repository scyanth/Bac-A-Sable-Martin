import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import connexion from "../services/connexion";
import type { Repo } from "../types/RepoType";

export default function Detail() {

  const { id } = useParams();
  const [repos, setRepo] = useState<Repo[]>();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repox = await connexion.get<Repo[]>(`/api/repos/${id}`);
        setRepo(repox.data);
        console.log('repo state : ', repos);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRepos();
  }, []);

  return <>
        {repos ? (
          <div>
            <h2>{repos[0].name}</h2>
            <br/>
            <ul>
              {repos[0].languages.map((lang) => (
                <li key={lang.label}>{lang.label}</li>
              ))}
            </ul>
          </div>
        ) : 
          (<p>Loading...</p>)
      }
  </>;
}