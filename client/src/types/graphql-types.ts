import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Lang = {
  __typename?: 'Lang';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRepo: Repo;
};


export type MutationCreateRepoArgs = {
  repoInput: CreateRepoInput;
};

export type Query = {
  __typename?: 'Query';
  getLangs: Array<Lang>;
  getRepoById: Repo;
  getRepos: Array<Repo>;
};


export type QueryGetRepoByIdArgs = {
  id: Scalars['String']['input'];
};

export type Repo = {
  __typename?: 'Repo';
  id: Scalars['ID']['output'];
  isFavorite: Scalars['Boolean']['output'];
  languages: Array<Lang>;
  name: Scalars['String']['output'];
  status: Status;
  url: Scalars['String']['output'];
};

export type Status = {
  __typename?: 'Status';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
};

export type CreateRepoInput = {
  id: Scalars['String']['input'];
  isFavorite: Scalars['Boolean']['input'];
  languages: Array<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  status: Scalars['Float']['input'];
  url: Scalars['String']['input'];
};

export type GetReposandLangsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReposandLangsQuery = { __typename?: 'Query', getRepos: Array<{ __typename?: 'Repo', id: string, isFavorite: boolean, name: string, url: string, languages: Array<{ __typename?: 'Lang', label: string }> }>, getLangs: Array<{ __typename?: 'Lang', label: string }> };


export const GetReposandLangsDocument = gql`
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

/**
 * __useGetReposandLangsQuery__
 *
 * To run a query within a React component, call `useGetReposandLangsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReposandLangsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReposandLangsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetReposandLangsQuery(baseOptions?: Apollo.QueryHookOptions<GetReposandLangsQuery, GetReposandLangsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReposandLangsQuery, GetReposandLangsQueryVariables>(GetReposandLangsDocument, options);
      }
export function useGetReposandLangsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReposandLangsQuery, GetReposandLangsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReposandLangsQuery, GetReposandLangsQueryVariables>(GetReposandLangsDocument, options);
        }
export function useGetReposandLangsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetReposandLangsQuery, GetReposandLangsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetReposandLangsQuery, GetReposandLangsQueryVariables>(GetReposandLangsDocument, options);
        }
export type GetReposandLangsQueryHookResult = ReturnType<typeof useGetReposandLangsQuery>;
export type GetReposandLangsLazyQueryHookResult = ReturnType<typeof useGetReposandLangsLazyQuery>;
export type GetReposandLangsSuspenseQueryHookResult = ReturnType<typeof useGetReposandLangsSuspenseQuery>;
export type GetReposandLangsQueryResult = Apollo.QueryResult<GetReposandLangsQuery, GetReposandLangsQueryVariables>;