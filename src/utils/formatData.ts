
export const formatListResponse = (data: { name: string }) => {
    return {
        id: data.name,
        value: data.name
    };
};