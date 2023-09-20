const getAll = async (): Promise<ResponseArray<Team>> => {
    try {
        const res = await fetch(`${process.env.API_URL}/api/teams?populate=*`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${global.jwt}`,
            },
        });
        const result = await res.json()
        if (result?.error) {
            console.error(result.error)
            return {
                data: [],
            }
        }
        return result;
    } catch (error) {
        console.error(error);
        return {
            data: [],
        }
    }
};

const teamService = {
    getAll,
};

export default teamService;
