"use client";

import { useSingleCharacter } from "@/Component/hooks/useSingleCharacter";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  const { loading, error, data } = useSingleCharacter(Number(id));
  console.log(data?.character);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader text-center"></div>
      </div>
    );

  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  const character = data?.character;

  return (
    <div className="px-4 py-10 flex flex-row items-center justify-center gap-x-16 h-screen bg-[#E9F5BE]">
      <img src={character.image} alt={character.name} className="w-48 " />
      <div className="flex flex-col leading-10">
        <h1 className="text-2xl font-bold">{character.name}</h1>
        <p>
          <span className="font-semibold">Status:</span> {character.status}
        </p>
        <p>
          <span className="font-semibold">Species:</span> {character.species}
        </p>
        <p>
          <span className="font-semibold">Gender</span>: {character.gender}
        </p>
        <p>
          <span className="font-semibold">Location:</span>
          {character.location.name}
        </p>
      </div>
    </div>
  );
};

export default Page;
