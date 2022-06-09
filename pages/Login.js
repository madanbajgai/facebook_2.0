import React from "react";
import Image from "next/image";
import fb from "../public/social.webp";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="grid place-items-center my-32">
      <Image src={fb} width={150} height={150} objectFit="contain" />
      <h1 onClick={signIn} className=" cursor-pointer my-10 p-5 rounded-full bg-blue-600 font-500 text-white text-xl">
        Login with Facebook
      </h1>
    </div>
  );
}
