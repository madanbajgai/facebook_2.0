import React from "react";
import Storycard from "./Storycard";
import { useSession } from "next-auth/react";

const stories = [
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  const { data: session, status } = useSession();

  return (
    <div className="flex justify-center mx-auto space-x-3">
      <Storycard key="123" name={session.user.name} src={session.user.image} profile={session.user.image} />
      {stories.map((story) => (
        <Storycard key={story.name} name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;
