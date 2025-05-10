"use client";

import { gql, useQuery } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Image from "next/image";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const GET_CHARACTER = gql`
  query {
    characters(page: 1, filter: { name: "Rick" }) {
      results {
        id
        name
        species
        gender
        image
      }
    }
  }
`;

const HeroSection = () => {
  const { loading, error, data } = useQuery(GET_CHARACTER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-6 px-20">
      {data?.characters?.results
        ?.slice(0, 10)
        .map(({ id, name, species, gender, image }) => (
          <div key={id} className="bg-gray-100 rounded-lg shadow p-4">
            <Image
              src={image}
              width={300}
              height={200}
              alt={name}
              className="rounded-md object-cover w-full h-auto"
            />
            <h3 className="mt-2">
              <span className="font-semibold">Name:</span> {name}
            </h3>
            <p>
              <span className="font-semibold">Species:</span> {species}
            </p>
            <p>
              <span className="font-semibold">Gender:</span> {gender}
            </p>
          </div>
        ))}
    </div>
  );
};

export default HeroSection;
