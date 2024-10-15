import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import connexion from "./services/connexion";
import { ApolloProvider, /* useQuery, gql */  } from "@apollo/client";
// import Detail from './pages/Detail'
import App from './App.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
  // {
  //   path: "/detail/:id",
  //   element: <Detail />
  // }
  // {
  //   path: "/detail/:id",
  //   element: <Detail />,
  //   loader: async ({ params }) => {
  //     // const repos = await connexion.get(`/api/repos/${params.id}`);
  //     const repos = await useQuery(gql`
  //         query getRepos {
  //           repos {
  //             id: ${params.id}
  //           }
  //         }
  //       `)
  //     console.log("Loader", repos);
  //     return repos.data;
  //   },
  // }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={connexion}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>,
)