import Head from "next/head";
import Image from "next/image";
import Header from "./header";
import { getSession, useSession } from "next-auth/react";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";

export default function Home() {
  const { data: session, status } = useSession();
  if (!session) return <Login />;
  return (
    <div className="h-screen overflow-hidden bg-gray-100 ">
      {/* Header */}
      <Header />

      <main className="flex">
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* widget */}
        <Widget />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
