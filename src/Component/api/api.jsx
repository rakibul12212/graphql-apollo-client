// import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

// export const GET_CHARACTER = gql`
//   query {
//     characters(page: 1) {
//       results {
//         id
//         name
//         status
//         species
//         gender
//         image
//       }
//     }
//   }
// `;

// export const GET_Episode = gql`
//   query {
//     episodes {
//       results {
//         id
//         name
//         episode
//         air_date
//       }
//     }
//   }
// `;

// =========================================

// query {
//   characters(page: 1) {
//     results {
//       id
//       name
//       status
//       species
//       gender
//       image
//       location {
//         name
//       }
//       episode {
//         id
//         name
//         air_date
//       }
//     }
//   }
// }
