"use client";

import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { GET_CHARACTER } from "../api/api";

const HeroSection = () => {
 const { loading, error, data } = useQuery(GET_CHARACTER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 py-6 px-5 md:px-20">
      {data?.characters?.results
        ?.slice(0, 20)
        .map(({ id, image, name, species, gender, location, episode }) => (
          <div key={id} className="bg-gray-100 rounded-lg shadow p-4">
            <Image
              src={image}
              width={400}
              height={100}
              alt={name}
              className="rounded-md object-cover w-full h-auto"
            />
            <h3 className="mt-2">
              <span className="font-semibold">Name:</span> {name}
            </h3>
            <h3>
              <span className="font-semibold">Location:</span> {location?.name}
            </h3>
            <h3>
              <span className="font-semibold">Episode:</span> {episode[0].name}
            </h3>
            <h3>
              <span className="font-semibold">Date:</span> {episode[0].air_date}
            </h3>
            <p>
              <span className="font-semibold">Species:</span> {species}
            </p>
            <p>
              <span className="font-semibold">Gender:</span> {gender}
            </p>
            <Link href={`/CardDetails/${id}`}>view details</Link>
          </div>
        ))}
    </div>
  );
};

export default HeroSection;
