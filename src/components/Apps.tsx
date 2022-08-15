import Image from "next/image";
import androidImg from "../../public/images/descarga_android.png";
import appleImg from "../../public/images/descarga_apple.png";

const Apps: React.FC = () => {
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
          <div className="mx-auto mt-8 h-72 w-56 rounded-bl-lg rounded-tr-lg bg-gray-600 bg-opacity-95 md:mt-0 md:mr-0 lg:h-80 lg:w-60" />
          <div className="mx-2 -mt-4 md:mt-0 md:flex md:flex-col md:justify-between md:pr-32 lg:pr-0">
            <div className="flex items-center md:mx-0">
              {/*<div className="h-12 w-12 bg-gray-600 shadow" />*/}
              <h3 className="text-4xl font-bold text-utopicx-magenta lg:text-7xl lg:leading-[4rem]">
                Alta previa
              </h3>
            </div>
            <p className="my-3 text-left font-redhat text-white lg:my-0 lg:text-2xl">
              Super mega descripción de nuestras apps y de lo extra fantabulosas
              que son.
            </p>
            <div className="flex gap-x-1 md:justify-start md:gap-x-4">
              <a
                className="h-14 w-14 border border-transparent focus:outline-none focus:ring-1 focus:ring-utopicx-magenta focus:ring-offset-1 focus:ring-offset-transparent"
                href=""
              >
                <Image src={androidImg} alt="Android" />
              </a>
              <a
                className="h-14 w-14 border border-transparent focus:outline-none focus:ring-1 focus:ring-utopicx-magenta focus:ring-offset-1 focus:ring-offset-transparent"
                href=""
              >
                <Image src={appleImg} alt="Apple" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apps;
