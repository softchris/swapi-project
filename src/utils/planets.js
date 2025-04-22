// star wars planets
export const planets = [
    {
        id: 1,
        name: "Tatooine",
        rotation_period: "23",
        orbital_period: "304",
        diameter: "10465",
        climate: "arid",
        gravity: "1",
        terrain: "desert",
        surface_water: "1",
        population: "200000",
    },
    {
        id: 2,
        name: "Alderaan",
        rotation_period: "24",
        orbital_period: "364",
        diameter: "12500",
        climate: "temperate",
        gravity: "1.5",
        terrain: "grasslands, mountains",
        surface_water: "40",
        population: "1000000000",
    },
    {
        id: 3,
        name: "Yavin IV",
        rotation_period: "24",
        orbital_period: "4818",
        diameter: "10200",
        climate: "tropical",
        gravity: "1",
        terrain: "jungle, rainforests",
        surface_water: "8",
        population: "1000",
    }
];

export const getPlanets = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(planets);
        }, 1000);
    });
};
