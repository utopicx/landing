import Image from "next/image";
import { FC } from "react";
import androidImg from "../../public/images/descarga_android.png";
import appleImg from "../../public/images/descarga_apple.png";
import altaPreviaImg from "../../public/images/alta_previa.png";

interface Props {
  data: Array<App & { id: number }>;
}

const Apps: FC<Props> = ({ data }) => {
  const app = data[0];

  return (
    <section
      id="apps"
      className="min-h-screen px-16 pt-16 md:flex md:items-center"
    >
      <div className="md:mx-auto md:max-w-2xl">
        <h2 className="sr-only text-center text-4xl font-bold text-utopicx-cyan">
          Apps
        </h2>
        <div className="md:mt-4 md:grid md:grid-cols-2">
          {app?.Image ? (
            <div className="relative mt-8 w-56 md:mx-auto md:mr-0 md:mt-0 lg:h-80 lg:w-60">
              <div className="h-full px-4 md:pt-6">
                <Image
                  src={altaPreviaImg}
                  alt={app?.Image.data.attributes.alternativeText}
                  width={256}
                  height={256}
                />
              </div>
            </div>
          ) : (
            <div className="mx-auto mt-8 h-72 w-56 rounded-bl-lg rounded-tr-lg bg-gray-600 bg-opacity-95 md:mr-0 md:mt-0 lg:h-80 lg:w-60" />
          )}
          <div className="relative z-10 mx-2 mt-8 md:mt-0 md:flex md:flex-col md:justify-between md:pr-32 lg:pr-0">
            <div className="flex items-center md:mx-0">
              <h3 className="text-4xl font-bold text-utopicx-magenta lg:text-7xl lg:leading-[4rem]">
                {app?.name}
              </h3>
            </div>
            <p className="my-3 text-left font-redhat text-white lg:my-0 lg:text-2xl">
              {app?.description}
            </p>
            <div className="flex gap-x-1 md:justify-start md:gap-x-4">
              <a
                className="relative h-14 w-14 rounded-bl-md rounded-br rounded-tl rounded-tr-md border border-transparent focus:outline-none focus:ring-1 focus:ring-utopicx-magenta focus:ring-offset-1 focus:ring-offset-transparent"
                href={app?.URLAndroid}
                target="_blank"
                rel="noreferrer"
              >
                <Image src={androidImg} alt="Android" />
              </a>
              {app?.URLApple && app.URLApple !== "-" ? (
                <a
                  className="relative h-14 w-14 rounded-bl-md rounded-br rounded-tl rounded-tr-md border border-transparent focus:outline-none focus:ring-1 focus:ring-utopicx-magenta focus:ring-offset-1 focus:ring-offset-transparent"
                  href={app?.URLApple}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={appleImg} alt="Apple" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apps;
