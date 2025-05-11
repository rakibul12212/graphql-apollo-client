'use client'
import { gql, useQuery } from "@apollo/client";

export const GET_CHARACTER = gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;

export const useCharacter = () => {
  const { loading, error, data } = useQuery(GET_CHARACTER);
  return {loading, error, data};
};
