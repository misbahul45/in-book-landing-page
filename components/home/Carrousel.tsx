import { POSTER } from "@/constant";
import Image from "next/image";
import React from "react";
const Carrousel = () => {


  return (
    <section id="poster" className="px-4">
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg bg-gradient-to-r my-8 from-slate-500 to-gray-600 p-4">
            <div className="text-center py-8 text-white">
                <h1 className="text-2xl sm:text-5xl font-extrabold mb-4">
                🌟 Tingkatkan Diri Melalui <span className="underline decoration-yellow-400">Literasi Digital</span>
                </h1>
                <p className="text-md sm:text-xl font-light max-w-2xl mx-auto">
                    Jelajahi keajaiban ilmu pengetahuan dan jembatani pemahaman menuju masa depan yang lebih cerah. 🚀
                </p>
            </div>
            <div className="relative grid grid-cols-2 md:gap-6 gap-4 mx-auto w-fit">
                {POSTER.map((post) => (
                    <Image key={post.id} src={post.image} width={300} height={300} alt={`Poster ${post.id}`} className="w-full max-w-xs shadow-xl shadow-slate-400/60 hover:shadow-2xl hover:shadow-slate-300/90 hover:scale-105 rounded-xl transition-all duration-300" />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Carrousel;