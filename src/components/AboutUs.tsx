const AboutUs: React.FC = () => {
  return (
    <section id="aboutUs" className="min-h-screen pt-16 px-16">
      <h2 className="text-utopicx-cyan font-bold text-4xl text-center">
        Nosotrxs
      </h2>
      <div className="h-80 mt-8 w-56 border-2 border-utopicx-cyan relative mx-auto rounded-md">
        <div className="bg-gray-600 absolute top-2 right-2 w-full h-full rounded-md" />
      </div>
      <h3 className="text-utopicx-magenta text-4xl font-bold -mt-3 z-10 relative">
        Apodo
      </h3>
      <p className="text-white italic my-3 font-light">rol</p>
      <p className="text-white font-light">
        Super mega descripción de cada unx, que somos super geniales y sexys.
      </p>
    </section>
  );
};

export default AboutUs;
