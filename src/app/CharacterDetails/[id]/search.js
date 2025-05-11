"use client";

import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATION = gql`
  query getCharacterLocation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        location {
          name
        }
      }
    }
  }
`;

export const Search = () => {
  const [name, setName] = useState("");
  const [getLocation, { loading, error, data }] = useLazyQuery(
    GET_CHARACTER_LOCATION,
    {
      variables: { name },
    }
  );

  return (
    <div className="p-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded mr-2"
        placeholder="Enter character name"
      />
      <button
        onClick={() => getLocation()}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      {loading && <div className="mt-4">Loading...</div>}
      {error && <div className="text-red-500 mt-4">Something went wrong.</div>}

      {data?.characters?.results?.length > 0 && (
        <ul className="mt-4 list-disc list-inside">
          {data.characters.results.map((character) => (
            <li key={character.id}>
              {character.name} — Location: {character.location?.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
