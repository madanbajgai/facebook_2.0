import React from "react";
import Image from "next/image";
import fb from "../public/social.webp";
import search from "../public/search.png";
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from "@heroicons/react/solid";
import { FlagIcon, PlayIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { useSession, signOut } from "next-auth/react";

function Header() {
  const { data: session, status } = useSession();
  return (
    <div className="sticky top-0 z-10 flex items-center p-2 shadow-md lg:px-5 ">
      <div>
        <Image src={fb} width={40} height={40} layout="fixed" />
      </div>
      <div className="flex items-center p-2 ml-2 bg-gray-100 rounded-full">
        <Image src={search} width={40} height={40} layout="fixed" />
        <input className="flex-shrink hidden bg-transparent outline-none md:inline-flex" type="text" placeholder="Search Facebook" />
      </div>
      <div className="flex justify-center flex-grow space-x-6 md:space-x-2">
        <HeaderIcon active Icon={HomeIcon} />
        <HeaderIcon Icon={FlagIcon} />
        <HeaderIcon Icon={PlayIcon} />
        <HeaderIcon Icon={ShoppingCartIcon} />
        <HeaderIcon Icon={UserGroupIcon} />
      </div>
      <div className="flex items-center justify-end sm:space-x-2">
        {/* {session.user.image} */}
        <Image onClick={signOut} className="rounded-full" src={session.user.image} width="40" height="40" layout="fixed" />
        <p className="p-3 font-semibold whitespace-nowrap">Madan Bazgai</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}
export default Header;
