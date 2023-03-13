import Image from "next/image";
import usBorderImg from "../../public/images/nosotrxs_marco.png";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import classNames from "../utils/classNames";

interface Props {
  image?: string;
  name: string;
  role: string;
  description: string;
  showVideo: boolean;
  video: string;
}

const Team = ({ description, role, showVideo, name, image, video }: Props) => {
  return (
    <div className="md:flex md:items-center md:gap-x-4 md:pb-8 lg:block lg:pb-0">
      <div className="relative mx-auto mt-8 h-80 w-56 rounded-md md:mr-0 lg:mr-auto lg:h-80 lg:w-64">
        <div className="absolute inset-0">
          <Image
            src={usBorderImg}
            alt="Borde"
            sizes="(min-width: 1024px) 256px, 224px"
          />
        </div>
        {image ? (
          <div className="absolute top-4 right-4 h-full w-full">
            <Image
              className="aspect-[7/10] rounded-bl-2xl rounded-tr-2xl rounded-br rounded-tl saturate-[1.25]"
              src={image}
              alt={name}
              sizes="(min-width: 1024px) 256px, 224px"
              width={256}
              height={256}
            />
          </div>
        ) : null}
        <Transition
          show={showVideo}
          as={Fragment}
          enter="ease-out"
          enterFrom="blur-xl"
          enterTo="blur-none"
          leave="ease-in-out"
          leaveFrom="blur-none"
          leaveTo="blur-xl"
        >
          <div
            className={classNames(
              image ? "hover:opacity-0" : "",
              "absolute top-4 right-4 z-10 h-full w-full transition-all duration-1000"
            )}
          >
            <video
              className="h-full w-full rounded-bl-2xl rounded-tr-2xl rounded-br rounded-tl object-cover object-top"
              autoPlay
              loop
              muted
            >
              <source src={video} />
            </video>
          </div>
        </Transition>
      </div>
      <div className="mx-auto -mt-1 px-14 md:ml-0 md:px-0 lg:ml-auto lg:-mt-2 lg:w-64">
        <div className="lg:-ml-4">
          <h3 className="relative z-10 text-4xl font-bold text-utopicx-magenta lg:text-6xl">
            {name}
          </h3>
          <p className="my-3 font-redhat font-bold italic text-white lg:my-1 lg:text-xl">
            {role}
          </p>
          <p className="w-52 font-redhat font-light text-white lg:w-full lg:pr-6 lg:text-lg lg:leading-6  ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
