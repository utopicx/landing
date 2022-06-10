const Hi: React.FC = () => {
  return (
    <section
      id="hi"
      className="flex min-h-screen flex-col items-center justify-center text-center"
    >
      <h2 className="text-4xl font-bold text-utopicx-magenta lg:text-7xl">
        Saludo
      </h2>
      <p className="mt-8 w-72 text-white lg:mt-4 lg:w-full lg:max-w-lg lg:text-2xl">
        Somos una empresa innovadora que busca estar a la vanguardia en las
        tendencias tecnológicas.
      </p>
    </section>
  );
};

export default Hi;
