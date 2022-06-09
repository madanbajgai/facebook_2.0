import React, { useEffect } from "react";
import { db } from "../firebase";
import Post from "./Post";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const posts = [];
export default function Posts() {
  const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
  const getdata = () => {
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        posts.push(doc.data());
      });
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} name={post.name} message={post.message} email={post.email} timestamp={post.timestamp} image={post.image} />
      ))}
    </div>
  );
}
