// Star Wars characters data
export const characters = [
    {
        id: 1,
        name: "Luke Skywalker",
        gender: "male",
        homeworld: "Tatooine",
        species: "Human"
    },
    {
        id: 2,
        name: "Leia Organa",
        gender: "female",
        homeworld: "Alderaan",
        species: "Human"
    },
    {
        id: 3,
        name: "Han Solo",
        gender: "male",
        homeworld: "Corellia",
        species: "Human"
    }
];

export const getCharacters = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(characters);
        }, 1000);
    });
};
