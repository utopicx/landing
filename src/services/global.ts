const getAll = async () => {
    const res = await fetch(`${process.env.API_URL}/api/global-entity`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${global.jwt}`,
        },
    });
    return (await res.json()) as Response<GlobalEntity>;
};

const globalService = {
    getAll,
};

export default globalService;
