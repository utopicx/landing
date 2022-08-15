const getAll = async () => {
  const res = await fetch(`${process.env.API_URL}/api/apps?populate=Imagen`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${global.jwt}`,
    },
  });
  return (await res.json()) as Response<App>;
};

const appService = {
  getAll,
};

export default appService;
