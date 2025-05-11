"use client";

import { useSingleEpisode } from "@/Component/hooks/useSingleEpisode";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  console.log("ID:", id); // Log the ID to ensure it's passed correctly
  const { loading, error, data } = useSingleEpisode(Number(id));

  console.log("Data:", data); // Log the data to check if it's coming correctly

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader text-center"></div>
      </div>
    );

  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  const episodes = data?.character?.episode;

  return (
    <div className="p-10 bg-[#E9F5BE]">
      <h1 className="text-3xl font-bold mb-4"> Episodes</h1>
      <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
        {episodes?.length > 0 ? (
          episodes.slice(0, 10).map((episode) => (
            <div key={episode.id} className="bg-[#81E7AF] p-4  shadow">
              <h2 className="text-xl font-semibold">{episode.name}</h2>
              <p>Episode: {episode.episode}</p>
              <p>Date: {episode.air_date}</p>
            </div>
          ))
        ) : (
          <p>No episodes found for this character.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
