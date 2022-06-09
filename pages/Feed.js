import React from "react";
import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

export default function Feed() {
  return (
    <div className=" flex-grow h-screen pt-6 pb-32 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
      <div className=" mx-auto max-w-md md:max-w-lg">
        {/* stories */}
        <Stories />
        {/* postinput */}
        <InputBox />
        {/* posts */}
        <Posts />
      </div>
    </div>
  );
}
