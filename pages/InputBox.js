import Image from "next/image";
import { useSession } from "next-auth/react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../firebase";
import { ref, uploadString, getDownloadURL, listAll, list } from "firebase/storage";

function InputBox() {
  const { data: session, status } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageUpload, setimageUpload] = useState("");
  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    try {
      const docRef = await addDoc(collection(db, "posts"), {
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: serverTimestamp(),
      });

      // const imageRef = ref(storage, `photos/${docRef.id}`);
      // const uploadTask = uploadString(imageRef, imageUpload, "data_url").then((snapshot) => {
      //   console.log("Uploaded");
      // });

      console.log("Document written with ID: ", docRef.id);
      // removeImage();
      // TODO: add image to firebase document

      /*** */
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    inputRef.current.value = "";
  };
  // const addImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = function (readerEvent) {
  //     setimageUpload(readerEvent.target.result);
  //   };
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };
  // const removeImage = () => {
  //   setimageUpload(null);
  // };
  return (
    <div className="bg-white rounded-xl shadow-md my-3">
      <div className="flex space-x-4 p-4 place-items-center ">
        <Image className="rounded-full" src={session.user.image} width={40} height={40} layout="fixed" />

        <form action="" onSubmit={sendPost} className="flex flex-1">
          <input ref={inputRef} className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" type="text" placeholder={`What's on your mind, ${session.user.name}`} />
          <button hidden type="submit">
            {/* onClick={sendPost}  */}
            Submit
          </button>
        </form>

        {/* {imageUpload && (
          <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer ">
            <img src={imageUpload} className="h-10 object-contain" alt="" />
          </div>
        )} */}
      </div>
      <div className="flex justify-evenly p-3 border">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live video</p>
        </div>

        {/* <div onClick={() => filePickerRef.current.click()} className="inputIcon">
          <input onChange={addImageUpload} ref={filePickerRef} type="file" className="hidden" />
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div> */}

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
