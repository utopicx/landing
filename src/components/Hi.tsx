const Hi: React.FC = () => {
  return (
    <section
      id="hi"
      className="flex flex-col justify-center items-center min-h-screen text-center"
    >
      <h2 className="text-utopicx-cyan font-bold text-4xl md:text-7xl">
        Saludo
      </h2>
      <p className="text-white w-72 mt-8 md:mt-4 md:text-2xl md:max-w-lg md:w-full">
        Somos una empresa innovadora que busca estar a la vanguardia en las
        tendencias tecnológicas.
      </p>
    </section>
  );
};

export default Hi;
