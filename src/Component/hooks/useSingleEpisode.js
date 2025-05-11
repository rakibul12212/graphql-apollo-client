"use client";
import { gql, useQuery } from "@apollo/client";

export const GET_CHARACTER = gql`
  query GetSingleEpisode($id: ID!) {
    character(id: $id) {
      episode {
        id
        name
        episode
        air_date
      }
    }
  }
`;
export const useSingleEpisode = (id) => {
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  return { loading, error, data };
};
