// star wars planets
export const planets = [
    { id: 1, name: "Tatooine", rotation_period: "23", orbital_period: "304", diameter: "10465", climate: "arid", gravity: "1", terrain: "desert", surface_water: "1", population: "200000" },
    { id: 2, name: "Alderaan", rotation_period: "24", orbital_period: "364", diameter: "12500", climate: "temperate", gravity: "1.5", terrain: "grasslands, mountains", surface_water: "40", population: "1000000000" },
    { id: 3, name: "Yavin IV", rotation_period: "24", orbital_period: "4818", diameter: "10200", climate: "tropical", gravity: "1", terrain: "jungle, rainforests", surface_water: "8", population: "1000" },
    { id: 4, name: "Hoth", rotation_period: "23", orbital_period: "549", diameter: "7200", climate: "frozen", gravity: "1.1", terrain: "tundra, ice caves, mountain ranges", surface_water: "100", population: "unknown" },
    { id: 5, name: "Dagobah", rotation_period: "23", orbital_period: "341", diameter: "8900", climate: "murky", gravity: "N/A", terrain: "swamp, jungles", surface_water: "8", population: "unknown" },
    { id: 6, name: "Bespin", rotation_period: "12", orbital_period: "5110", diameter: "118000", climate: "temperate", gravity: "1.5", terrain: "gas giant", surface_water: "0", population: "6000000" },
    { id: 7, name: "Endor", rotation_period: "18", orbital_period: "402", diameter: "4900", climate: "temperate", gravity: "0.85", terrain: "forests, mountains, lakes", surface_water: "8", population: "30000000" },
    { id: 8, name: "Naboo", rotation_period: "26", orbital_period: "312", diameter: "12120", climate: "temperate", gravity: "1", terrain: "grassy hills, swamps, forests, mountains", surface_water: "12", population: "4500000000" },
    { id: 9, name: "Coruscant", rotation_period: "24", orbital_period: "368", diameter: "12240", climate: "temperate", gravity: "1", terrain: "cityscape, mountains", surface_water: "unknown", population: "1000000000000" },
    { id: 10, name: "Kamino", rotation_period: "27", orbital_period: "463", diameter: "19720", climate: "temperate", gravity: "1", terrain: "ocean", surface_water: "100", population: "1000000000" },
    { id: 11, name: "Geonosis", rotation_period: "30", orbital_period: "256", diameter: "11370", climate: "temperate, arid", gravity: "0.9", terrain: "rock, desert, mountain, barren", surface_water: "5", population: "100000000000" },
    { id: 12, name: "Mustafar", rotation_period: "36", orbital_period: "412", diameter: "4200", climate: "hot", gravity: "1", terrain: "volcanoes, lava rivers, mountains, caves", surface_water: "0", population: "20000" },
    { id: 13, name: "Jakku", rotation_period: "unknown", orbital_period: "unknown", diameter: "unknown", climate: "arid", gravity: "unknown", terrain: "desert", surface_water: "unknown", population: "unknown" },
    { id: 14, name: "Scarif", rotation_period: "unknown", orbital_period: "unknown", diameter: "unknown", climate: "tropical", gravity: "unknown", terrain: "beaches, islands, jungles", surface_water: "unknown", population: "unknown" },
    { id: 15, name: "Kashyyyk", rotation_period: "26", orbital_period: "381", diameter: "12765", climate: "tropical", gravity: "1", terrain: "jungle, forests, lakes, rivers", surface_water: "60", population: "45000000" },
    { id: 16, name: "Mandalore", rotation_period: "unknown", orbital_period: "unknown", diameter: "unknown", climate: "temperate", gravity: "unknown", terrain: "forests, deserts, mountains", surface_water: "unknown", population: "unknown" },
    { id: 17, name: "Dantooine", rotation_period: "25", orbital_period: "378", diameter: "9830", climate: "temperate", gravity: "1", terrain: "savannahs, oceans, mountains, grasslands", surface_water: "unknown", population: "1000" },
    { id: 18, name: "Jedha", rotation_period: "unknown", orbital_period: "unknown", diameter: "unknown", climate: "cold", gravity: "unknown", terrain: "desert, rocky", surface_water: "unknown", population: "unknown" },
    { id: 19, name: "Ahch-To", rotation_period: "unknown", orbital_period: "unknown", diameter: "unknown", climate: "temperate", gravity: "unknown", terrain: "islands, ocean, cliffs", surface_water: "unknown", population: "unknown" },
    { id: 20, name: "Crait", rotation_period: "unknown", orbital_period: "unknown", diameter: "unknown", climate: "cold", gravity: "unknown", terrain: "salt flats, mountains, caves", surface_water: "unknown", population: "unknown" }
];

export const getPlanets = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(planets);
        }, 1000);
    });
};
