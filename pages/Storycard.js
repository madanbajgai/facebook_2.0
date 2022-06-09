import Image from "next/image";

function Storycard({ name, src, profile }) {
  return (
    <div className="relative w-10 h-10 mt-5 p-3 transition duration-200 ease-in transform cursor-pointer md:h-15 md:w-15 lg:h-40 lg:w-20 overflow-x hover:scale-105 hover:animate-pulse">
      <Image className="absolute z-50 rounded-full opacity-0 lg:opacity-100 top-10" src={profile} width={30} height={30} layout="fixed" objectFit="cover" />
      <Image className="object-cover rounded-full filter brightness-75 lg:rounded-xl" src={src} layout="fill" />
      <p className="absolute w-5/6 text-sm font-bold text-white truncate opacity-0 lg:opacity-100 bottom-4">{name}</p>
    </div>
  );
}

export default Storycard;
