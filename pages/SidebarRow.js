import Image from "next/image";
import React from "react";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex items-center p-2 space-x-2 rounded cursor-pointer hover:bg-gray-300 ">
      {src && <Image className="rounded-full" src={src} width={40} height={40} layout="fixed" />}
      {Icon && <Icon className="w-8 h-8 text-blue-500" />}
      <p className="hidden mx-1 font-medium sm:inline-flex">{title}</p>
    </div>
  );
}

export default SidebarRow;
