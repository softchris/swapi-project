// Star Wars species data
export const species = [
    { id: 1, name: "Human", classification: "mammal", language: "Galactic Basic" },
    { id: 2, name: "Droid", classification: "artificial", language: "Binary" },
    { id: 3, name: "Wookiee", classification: "mammal", language: "Shyriiwook" },
    { id: 4, name: "Rodian", classification: "sentient", language: "Galactic Basic" },
    { id: 5, name: "Hutt", classification: "gastropod", language: "Huttese" },
    { id: 6, name: "Mon Calamari", classification: "amphibian", language: "Mon Calamarian" },
    { id: 7, name: "Twi'lek", classification: "mammal", language: "Twi'leki" },
    { id: 8, name: "Sullustan", classification: "mammal", language: "Sullutese" },
    { id: 9, name: "Ewok", classification: "mammal", language: "Ewokese" },
    { id: 10, name: "Gungan", classification: "amphibian", language: "Gungan Basic" },
    { id: 11, name: "Nautolan", classification: "amphibian", language: "Nautila" },
    { id: 12, name: "Zabrak", classification: "mammal", language: "Zabraki" },
    { id: 13, name: "Kaminoan", classification: "amphibian", language: "Kaminoan" },
    { id: 14, name: "Chagrian", classification: "amphibian", language: "Chagri" },
    { id: 15, name: "Trandoshan", classification: "reptile", language: "Dosh" },
    { id: 16, name: "Togruta", classification: "mammal", language: "Togruti" },
    { id: 17, name: "Dathomirian", classification: "mammal", language: "Dathomiri" },
    { id: 18, name: "Mirialan", classification: "mammal", language: "Mirialan" },
    { id: 19, name: "Chiss", classification: "mammal", language: "Cheunh" },
    { id: 20, name: "Yoda's species", classification: "unknown", language: "Galactic Basic" },
    { id: 21, name: "Ugnaught", classification: "mammal", language: "Ugnaught" },
    { id: 22, name: "Nikto", classification: "reptile", language: "Nikto" },
    { id: 23, name: "Devaronian", classification: "mammal", language: "Devaronese" },
    { id: 24, name: "Ithorian", classification: "mammal", language: "Ithorese" },
    { id: 25, name: "Quarren", classification: "amphibian", language: "Quarrenese" },
    { id: 26, name: "Aqualish", classification: "amphibian", language: "Aqualish" },
    { id: 27, name: "Pau'an", classification: "mammal", language: "Utapese" },
    { id: 28, name: "Klatooinian", classification: "mammal", language: "Klatooinian" },
    { id: 29, name: "Weequay", classification: "mammal", language: "Weequay" },
    { id: 30, name: "Zygerrian", classification: "mammal", language: "Zygerrian" },
    { id: 31, name: "Gran", classification: "mammal", language: "Gran" },
    { id: 32, name: "Tholothian", classification: "mammal", language: "Tholothian" },
    { id: 33, name: "Lasat", classification: "mammal", language: "Lasat" },
    { id: 34, name: "Pantoran", classification: "mammal", language: "Pantoran" },
    { id: 35, name: "Dug", classification: "mammal", language: "Dugese" },
    { id: 36, name: "Togruta", classification: "mammal", language: "Togruti" },
    { id: 37, name: "Loth-cat", classification: "creature", language: "N/A" },
    { id: 38, name: "Muun", classification: "mammal", language: "Muun" },
    { id: 39, name: "Sith", classification: "mammal", language: "Sith" },
    { id: 40, name: "Droid (IG-series)", classification: "artificial", language: "Binary" }
];

export const getSpecies = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(species);
        }, 1000);
    });
};
