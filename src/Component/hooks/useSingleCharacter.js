"use client";
import { gql, useQuery } from "@apollo/client";

export const GET_CHARACTER = gql`
  query GetSingleCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
      location {
        id
        name
      }
    }
  }
`;
export const useSingleCharacter = (id) => {
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  return { loading, error, data };
};
  

