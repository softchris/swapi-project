// Star Wars species data
export const species = [
    { id: 1, name: "Human", classification: "mammal", language: "Galactic Basic" },
    { id: 2, name: "Droid", classification: "artificial", language: "Binary" },
    { id: 3, name: "Wookiee", classification: "mammal", language: "Shyriiwook" }
];

export const getSpecies = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(species);
        }, 1000);
    });
};
