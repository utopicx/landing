const getAll = async () => {
    const res = await fetch(`${process.env.API_URL}/api/seo`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${global.jwt}`,
        },
    });
    return (await res.json()) as Response<Seo>;
};

const seoService = {
    getAll,
};

export default seoService;
