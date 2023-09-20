const getAll = async () => {
    try {
        const res = await fetch(`${process.env.API_URL}/api/apps?populate=*`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${global.jwt}`,
            },
        });
        return (await res.json()) as ResponseArray<App>;
    } catch (error) {
        console.error(error);
        return {
            data: [],
        }
    }
};

const appService = {
    getAll,
};

export default appService;
