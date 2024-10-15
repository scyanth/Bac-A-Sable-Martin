import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import connexion from "../services/connexion";
// import type { Repo } from "../types/RepoType";
import { useQuery, gql } from "@apollo/client"

const { id } = useParams();

const getRepoDetail = gql`
    query GetRepoDetail {
    getRepoById(${id}) {
      isFavorite
      name
      url
      languages { label }
    }
  }
`

export default function Detail() {

  const { loading, error, data } = useQuery(getRepoDetail);

  if (loading) return <h1>Loading...</h1>
  if (error) {
    console.error(error);
    return <h1>Error !</h1>
  }

  // const { id } = useParams();
  // const [repos, setRepo] = useState<Repo[]>();

  // useEffect(() => {
  //   const fetchRepos = async () => {
  //     try {
  //       const repox = await connexion.get<Repo[]>(`/api/repos/${id}`);
  //       setRepo(repox.data);
  //       console.log('repo state : ', repos);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchRepos();
  // }, []);

  return <>
    <h2>{data.getRepos.name}</h2>
  </>;
}