// Star Wars films data
export const films = [
    { id: 1, title: "A New Hope", director: "George Lucas", release_date: "1977-05-25" },
    { id: 2, title: "The Empire Strikes Back", director: "Irvin Kershner", release_date: "1980-05-21" },
    { id: 3, title: "Return of the Jedi", director: "Richard Marquand", release_date: "1983-05-25" }
];

export const getFilms = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(films);
        }, 1000);
    });
};
