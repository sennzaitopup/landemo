import React from "react";
import Image from 'next/image';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

import SennzaiImg from "./img/Sennzai.jpg";
import SennzaiBanner from "./img/Sennzai.gif";

export default function ProfileCard() {
  return (
    <div className="bg-gray-800 flex items-center justify-center min-h-screen">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg w-80">
        <div className="relative">
          <Image
            src={SennzaiBanner}
            alt="sennzai.gif"
            width={320}
            height={128}
            className="w-full h-32 rounded-t-lg object-cover"
          />
          <div className="absolute top-20 left-4">
            <Image
              src={SennzaiImg}
              alt="Profile image with text 'ElaXan'"
              width={90}
              height={90}
              className="rounded-full border-4 border-gray-900"
            />
          </div>
        </div>
        <div className="p-4 mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Sennzai</h2>
            {/* <div className="flex space-x-2">
              <Image
                src="https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png"
                alt="HypeSquad Balance Badge"
                width={20}
                height={20}
              />
              <Image
                src="https://cdn.discordapp.com/badge-icons/6bdc42827a38498929a4920da12695d9.png"
                alt="Developer Badge"
                width={20}
                height={20}
              />
              <Image
                src="https://cdn.discordapp.com/badge-icons/6de6d34650760ba5551a79732e98ed60.png"
                alt="HashTag Badge"
                width={20}
                height={20}
              />
              <Image
                src="https://cdn.discordapp.com/badge-icons/7d9ae358c8c5e118768335dbe68b4fb8.png"
                alt="Quest Badge"
                width={20}
                height={20}
              />
            </div> */}
          </div>
          <p className="text-gray-400">sennzai • she/her</p>
          <hr className="my-2 border-gray-700" />
          <div>
            <h3 className="text-sm font-semibold">ABOUT ME</h3>
            <p className="text-sm">
              24 y.o.
              <br />
              Nothing
              <br />
            </p>
          </div>
          <hr className="my-2 border-gray-700" />
          <div>
            <h3 className="text-sm font-semibold">CONNECTIONS</h3>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 mt-2 text-gray-400 hover:text-white"
            >
              <FaGithub className="text-2xl" />
              <span>Github</span>
              <FaArrowRight className="ml-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
