import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
export const config = {
  unstable_runtimeJS: false,
};
import Script from "next/script";
export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <script defer src="/all.js"></script> */}
      <h1>this is test</h1>
      <h2>current count {count}</h2>
      <button onClick={() => setCount(count + 1)}>click</button>
      <h1></h1>
      <Image
        placeholder="none"
        width={302}
        height={320}
        src={"/images/cam.jpg"}
      ></Image>
      <Image
        placeholder="none"
        width={201}
        height={200}
        src={"/images/cam.jpg"}
      ></Image>
      <Image
        placeholder="none"
        width={130}
        height={100}
        src={"/images/cam.jpg"}
      ></Image>
      <Image
        placeholder="none"
        width={50}
        height={53}
        src={"/images/cam.jpg"}
      ></Image>
    </div>
  );
}
