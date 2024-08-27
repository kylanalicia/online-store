import Image from "next/image";
import * as React from 'react'

export default function Home() {
  return (
    <main className="">

      <h1>home</h1>
      Here is my app home
      <Image
       src="/assets/images/logo.svg" 
       width="200" 
       height="200"
       alt="logo"
        />
    </main>
  );
}
