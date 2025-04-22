// star wars planets
 const planets = [
    {
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
        name: "Yavin IV",
        rotation_period: "24",
        orbital_period: "4818",
        diameter: "10200",
        climate: "tropical, temperate, arid, polar",
        gravity: "1",
        terrain: "jungle, rainforests, temperate forests, mountains, swamps, grasslands, deserts, tundra, ice caves, cave systems, rocky canyons, volcanoes, lava tubes, geysers, hot springs, glaciers, icebergs, ice floes, ice caps, ice sheets, ice shelves, icebergs and ice floes.",
        surface_water: "8",
        population: "1000",
    }
]

export const getPlanets = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(planets);
        }, 1000);
    });
}
