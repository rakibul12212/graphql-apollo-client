"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useEpisode } from "../hooks/useEpisode";

const Episode = () => {
  const { loading, error, data } = useEpisode();
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader text-center"></div>
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="py-10">
      <h1 className="text-2xl text-center font-semibold pb-10">Episodes </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 py-6 px-5 md:px-10">
        {data?.episodes?.results?.slice(0, 4).map((episode) => (
          <div key={episode.id} className="bg-[#81E7AF] rounded-lg shadow p-4">
            <h3 className="text-xl font-semibold">{episode.name}</h3>
            <p className="text-base">Episode: {episode.episode}</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm">Date: {episode.air_date}</p>
              <Link href={`/EpisodeDetails/${episode.id}`}>
                <FiArrowRight size={18} className="hover:text-gray-500 " />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episode;
