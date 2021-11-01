import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-[#fff2d9] p-1">
      {/* Component for head */}
      <Head>
        <title>Pup or Not</title>
        <meta name="title" content="home page" />
      </Head>

      {/* Component for logo and navigation bar */}
      <div className="m-2">
        <Image
          className="relative"
          src="/logo.svg"
          alt="doggo"
          width={160}
          height={160}
        />
        <div className="absolute top-20 right-12 flex flex-row-reverse">
          <div className="font-custom font-normal text-xl">
            {/* TODO: Add navigation bar links */}
            <span className="m-10 hover:text-[#761e0b] cursor-pointer">
              About Us
            </span>
            <span className="m-10 hover:text-[#761e0b] cursor-pointer">
              Adoption Options
            </span>
            <span className="m-10 hover:text-[#761e0b] cursor-pointer">
              Why Get A Dog?
            </span>
          </div>
        </div>
      </div>

      {/* Component for the welcome text */}
      <div className="ml-16 grid grid-cols-2 gap-96 mt-40 items-center m-4">
        <div className="max-w-4xl m-2 ">
          <h1 className="text-4xl font-custom font-bold">
            Looking for some <span className="text-[#ff7931]">pawsitivity</span>
            ?
            <h2 className="font-custom font-light text-xl mt-2">
              Explore how a furry friend may fit into your life.
            </h2>
          </h1>
        </div>

        {/* Component for doggo jumping image and oval */}
        <div className="grid grid-cols-1 gap-2 max-w-md m-2">
          <Image
            src="/doggo-jump.svg"
            alt="A corgi happily jumping"
            width={354}
            height={209}
          />
          <Image src="/oval.svg" alt="A white oval" width={400} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Home;
