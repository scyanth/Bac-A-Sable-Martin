import { gql } from "@apollo/client";

export const getReposandLangs = gql`
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
