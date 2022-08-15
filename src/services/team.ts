const getAll = async () => {
  const res = await fetch(`${process.env.API_URL}/api/teams?populate=Imagen`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${global.jwt}`,
    },
  });
  return (await res.json()) as Response<Team>;
};

const teamService = {
  getAll,
};

export default teamService;
