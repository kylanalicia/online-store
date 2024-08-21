import Image from "next/image";


export default function Home() {
  return (
    <main className="">
      Here is my app

      <Image
       src="/assets/images/logo.svg" 
       width="200" 
       height="200"
       alt="logo"
        />
     
    </main>
  );
}
