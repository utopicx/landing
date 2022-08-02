import Image from "next/image";
import androidImg from "../../public/images/descarga_android.png";
import appleImg from "../../public/images/descarga_apple.png";

const Apps: React.FC = () => {
  return (
    <section
      id="apps"
      className="min-h-screen px-16 pt-16 lg:flex lg:items-center"
    >
      <div className="lg:mx-auto lg:max-w-2xl">
        <h2 className="sr-only text-center text-4xl font-bold text-utopicx-cyan">
          Apps
        </h2>
        <div className="lg:mt-4 lg:grid lg:grid-cols-2">
          <div className="mx-auto mt-8 h-72 w-56 rounded-bl-lg rounded-tr-lg bg-gray-600 bg-opacity-95 lg:mt-0 lg:mr-0" />
          <div className="mx-2 -mt-4 lg:mt-0 lg:flex lg:flex-col lg:justify-between">
            <div className="flex items-center lg:mx-0">
              {/*<div className="h-12 w-12 bg-gray-600 shadow" />*/}
              <h3 className="text-4xl font-bold text-utopicx-magenta lg:text-6xl">
                Alta previa
              </h3>
            </div>
            <p className="my-3 text-left text-white lg:my-0 lg:text-2xl">
              Super mega descripción de nuestras apps y de lo extra fantabulosas
              que son.
            </p>
            <div className="flex gap-x-1 lg:justify-start lg:gap-x-4">
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
