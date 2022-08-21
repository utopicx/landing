const getAll = async () => {
  const res = await fetch(`${process.env.API_URL}/api/teams?populate=*`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${global.jwt}`,
    },
  });
  return (await res.json()) as ResponseArray<Team>;
};

const teamService = {
  getAll,
};

export default teamService;
