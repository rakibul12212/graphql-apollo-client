"use client";
import { gql, useQuery } from "@apollo/client";

export const GET_Episode = gql`
  query {
    episodes {
      results {
        id
        name
        episode
        air_date
      }
    }
  }
`;

export const useEpisode = () => {
  const { loading, error, data } = useQuery(GET_Episode);
  return { loading, error, data };
};
