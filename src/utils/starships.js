// Star Wars starships data
export const starships = [
    { id: 1, name: "Millennium Falcon", model: "YT-1300 light freighter", manufacturer: "Corellian Engineering Corporation" },
    { id: 2, name: "X-wing", model: "T-65 X-wing", manufacturer: "Incom Corporation" },
    { id: 3, name: "TIE Fighter", model: "Twin Ion Engine Fighter", manufacturer: "Sienar Fleet Systems" }
];

export const getStarships = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(starships);
        }, 1000);
    });
};
