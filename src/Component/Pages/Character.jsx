"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useCharacter } from "../hooks/useCharacter";

const Character = () => {
  const { loading, error, data } = useCharacter();
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader text-center"></div>
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 py-20 px-5 md:px-10">
      {data?.characters?.results?.slice(0, 4).map((character) => (
        <div key={character.id} className="bg-gray-100 rounded-lg shadow p-4">
          <Image
            src={character.image}
            width={200}
            height={100}
            alt={character.name}
            className="rounded-md object-cover w-full h-auto"
          />
          <div className="mt-4 flex justify-between px-2 items-center">
            <h3 className="text-xl">{character.name}</h3>
            <Link href={`/CharacterDetails/${character.id}`}>
              <FiArrowRight size={24} className="hover:text-gray-500" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Character;
