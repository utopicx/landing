const Apps: React.FC = () => {
  return (
    <section id="apps" className="min-h-screen pt-16 px-16">
      <h2 className="text-utopicx-cyan font-bold text-4xl text-center">Apps</h2>
      <div className="flex items-center mt-6 mx-3">
        <div className="bg-gray-600 w-12 h-12 shadow" />
        <h3 className="text-3xl text-white font-bold ml-2">Alta previa</h3>
      </div>
      <div className="bg-gray-600 bg-opacity-95 h-72 mx-auto mt-8 w-56 rounded-bl-lg rounded-tr-lg" />
      <p className="text-center text-white my-4">
        Super mega descripción de nuestras apps y de lo extra fantabulosas que
        son.
      </p>
      <div className="flex justify-center gap-x-1">
        <a>
          <img src="/android.png" alt="Android" />
        </a>
        <a>
          <img src="/apple.png" alt="Apple" />
        </a>
      </div>
    </section>
  );
};

export default Apps;
