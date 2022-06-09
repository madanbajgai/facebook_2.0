import React from "react";
import Image from "next/image";

export default function Contact({ src, name }) {
  return (
    <div className="flex items-center space-x-3 relative hover:bg-gray-200 cursor-pointer rounded-xl p-1">
      <Image className="rounded-full" objectFit="cover" src={src} width="40" height="40" layout="fixed" />
      <p>{name}</p>
      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce  "></div>
    </div>
  );
}
