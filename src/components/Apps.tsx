import Image from "next/image";
import androidImg from "../../public/images/descarga_android.png";
import appleImg from "../../public/images/descarga_apple.png";

const Apps: React.FC = () => {
  return (
    <section
      id="apps"
      className="min-h-screen pt-16 px-16 md:flex md:items-center"
    >
      <div className="md:max-w-lg md:mx-auto">
        <h2 className="text-utopicx-cyan font-bold text-4xl text-center sr-only">
          Apps
        </h2>
        <div className="flex items-center mt-6 mx-3 md:mx-0">
          <div className="bg-gray-600 w-12 h-12 shadow" />
          <h3 className="text-3xl text-white font-bold ml-2">Alta previa</h3>
        </div>
        <div className="md:grid md:grid-cols-2 md:mt-4">
          <div className="bg-gray-600 bg-opacity-95 h-72 mx-auto mt-8 w-56 rounded-bl-lg rounded-tr-lg md:mt-0 md:ml-0" />
          <div>
            <p className="text-center text-white my-4 md:text-left md:text-2xl md:mt-0 md:mb-6">
              Super mega descripción de nuestras apps y de lo extra fantabulosas
              que son.
            </p>
            <div className="flex justify-center gap-x-1 md:justify-start md:gap-x-4">
              <a
                className="w-14 h-14 border border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-magenta focus:ring-offset-transparent"
                href=""
              >
                <Image src={androidImg} alt="Android" />
              </a>
              <a
                className="w-14 h-14 border border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-magenta focus:ring-offset-transparent"
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
