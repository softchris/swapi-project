// Star Wars films data
export const films = [
    { id: 1, title: "The Phantom Menace", director: "George Lucas", release_date: "1999-05-19" },
    { id: 2, title: "Attack of the Clones", director: "George Lucas", release_date: "2002-05-16" },
    { id: 3, title: "Revenge of the Sith", director: "George Lucas", release_date: "2005-05-19" },
    { id: 4, title: "A New Hope", director: "George Lucas", release_date: "1977-05-25" },
    { id: 5, title: "The Empire Strikes Back", director: "Irvin Kershner", release_date: "1980-05-21" },
    { id: 6, title: "Return of the Jedi", director: "Richard Marquand", release_date: "1983-05-25" },
    { id: 7, title: "The Force Awakens", director: "J.J. Abrams", release_date: "2015-12-18" },
    { id: 8, title: "The Last Jedi", director: "Rian Johnson", release_date: "2017-12-15" },
    { id: 9, title: "The Rise of Skywalker", director: "J.J. Abrams", release_date: "2019-12-20" },
    { id: 10, title: "Rogue One: A Star Wars Story", director: "Gareth Edwards", release_date: "2016-12-16" },
    { id: 11, title: "Solo: A Star Wars Story", director: "Ron Howard", release_date: "2018-05-25" }
];

export const getFilms = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(films);
        }, 1000);
    });
};
