"use client";

import Image from "next/image";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div id="about-me" className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="order-1 lg:order-none">
          <h1 className="mb-4 lg:text-5xl !leading-tight text-3xl font-bold text-blue-gray-900">
            Welcome to my Portfolio!
          </h1>
          <div className="mb-4 !text-gray-500 md:pr-16 xl:pr-28 text-lg leading-relaxed">
            I&apos;m Cham Bandara, a passionate Software Engineer based in Australia. Here,
            you&apos;ll get a glimpse of my journey in the world of technology, where creativity meets functionality.
          </div>
        </div>
        <div className="order-2 lg:order-none flex justify-center">
          {/* Modern Profile Card */}
          <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl max-w-sm w-full">
            {/* Decorative Dashed Lines */}
            <div className="absolute top-4 left-4">
            </div>
            
            {/* Profile Image Container */}
            <div className="relative mb-6 mt-4">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-400 via-red-500 to-orange-600">
                <Image
                  width={320}
                  height={320}
                  alt="Cham Bandara"
                  src="/image/mypic.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Connect With Me</h2>

              {/* Description */}
              <div className="text-gray-600 text-lg leading-relaxed px-2">
                Look me up on following social media platforms and say hi!
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/cham-bandara/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors duration-300 hover:scale-110 transform"
              >
                 <Image
                width={24}
                height={24}
                alt="linkedin"
                src="/image/linkedin2.svg"
              />
              </a>
              <a
                href="https://github.com/nchamb"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors duration-300 hover:scale-110 transform"
              >
               <Image
                width={24}
                height={24}
                alt="github"
                src="/image/github.svg"
              />
              </a>
              
              
              
              <a
                href="https://instagram.com/n.bannd"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors duration-300 hover:scale-110 transform"
              >
                <Image
                width={24}
                height={24}
                alt="github"
                src="/image/insta.svg"
              />
              </a>
              
              <a
                href="mailto:cham.bandara@outlook.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors duration-300 hover:scale-110 transform"
              >
                 <Image
                width={24}
                height={24}
                alt="linkedin"
                src="/image/email.svg"
              />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;