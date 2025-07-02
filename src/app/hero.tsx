"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div id="about-me" className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to my Portofolio!
          </Typography>
            <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
            >
            I&apos;m Cham Bandara, a passionate Software Engineer based in Australia. Here,
            you&apos;ll get a glimpse of my journey in the world of technology, where creativity meets functionality.
            </Typography>
          {/* Social media connnect buttons */}

          <Typography
            variant="h5"
            className="mb-4 lg:text-2xl !leading-tight text-3xl"
          >
            Connect with me :)
          </Typography>
          <div className="mb-4 p-2 flex gap-5">
            <a
              href="https://www.linkedin.com/in/nipun-bandara/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={24}
                height={24}
                alt="linkedin"
                src="/image/linkedin2.svg"
              />
            </a>
            <a
              href="https://github.com/nipunbandara"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={24}
                height={24}
                alt="twitter"
                src="/image/github.svg"
              />
            </a>
            <a
              href="https://instagram.com/n.bannd"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={24}
                height={24}
                alt="github"
                src="/image/insta.svg"
              />
            </a>
          </div>
          

          {/* <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row"> */}
              {/* @ts-ignore */}
              {/* <Input color="gray" label="Enter your email" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                require offer
              </Button>
            </div>
          </div> */}
          {/* <Typography variant="small" className="font-normal !text-gray-500">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography> */}
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/mypic.png"
          className="h-auto max-h-[34rem] w-full max-w-[32rem] rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
