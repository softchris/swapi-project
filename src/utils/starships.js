// Star Wars starships data
export const starships = [
    { id: 1, name: "Millennium Falcon", model: "YT-1300 light freighter", manufacturer: "Corellian Engineering Corporation" },
    { id: 2, name: "X-wing", model: "T-65 X-wing", manufacturer: "Incom Corporation" },
    { id: 3, name: "TIE Fighter", model: "Twin Ion Engine Fighter", manufacturer: "Sienar Fleet Systems" },
    { id: 4, name: "Star Destroyer", model: "Imperial I-class Star Destroyer", manufacturer: "Kuat Drive Yards" },
    { id: 5, name: "Slave I", model: "Firespray-31-class patrol and attack", manufacturer: "Kuat Systems Engineering" },
    { id: 6, name: "Executor", model: "Executor-class Star Dreadnought", manufacturer: "Kuat Drive Yards, Fondor Shipyards" },
    { id: 7, name: "A-wing", model: "RZ-1 A-wing interceptor", manufacturer: "Alliance Underground Engineering, Incom Corporation" },
    { id: 8, name: "B-wing", model: "A/SF-01 B-wing starfighter", manufacturer: "Slayn & Korpil" },
    { id: 9, name: "Y-wing", model: "BTL Y-wing starfighter", manufacturer: "Koensayr Manufacturing" },
    { id: 10, name: "Imperial Shuttle", model: "Lambda-class T-4a shuttle", manufacturer: "Sienar Fleet Systems" },
    { id: 11, name: "Naboo Royal Starship", model: "J-type 327 Nubian royal starship", manufacturer: "Theed Palace Space Vessel Engineering Corps" },
    { id: 12, name: "Jedi Interceptor", model: "Eta-2 Actis-class light interceptor", manufacturer: "Kuat Systems Engineering" },
    { id: 13, name: "Jedi Starfighter", model: "Delta-7 Aethersprite-class interceptor", manufacturer: "Kuat Systems Engineering" },
    { id: 14, name: "Venator-class Star Destroyer", model: "Venator-class Star Destroyer", manufacturer: "Kuat Drive Yards, Allanteen Six shipyards" },
    { id: 15, name: "ARC-170", model: "Aggressive Reconnaissance-170 starfighter", manufacturer: "Incom Corporation, Subpro Corporation" },
    { id: 16, name: "TIE Interceptor", model: "TIE/in Interceptor", manufacturer: "Sienar Fleet Systems" },
    { id: 17, name: "TIE Bomber", model: "TIE/sa bomber", manufacturer: "Sienar Fleet Systems" },
    { id: 18, name: "Tantive IV", model: "CR90 corvette", manufacturer: "Corellian Engineering Corporation" },
    { id: 19, name: "Ghost", model: "VCX-100 light freighter", manufacturer: "Corellian Engineering Corporation" },
    { id: 20, name: "Razor Crest", model: "ST-70 Assault Ship", manufacturer: "Unknown" },
    { id: 21, name: "Gauntlet Fighter", model: "Kom'rk-class fighter/transport", manufacturer: "MandalMotors" },
    { id: 22, name: "Imperial Light Cruiser", model: "Arquitens-class command cruiser", manufacturer: "Kuat Drive Yards" },
    { id: 23, name: "TIE Defender", model: "TIE/D Defender", manufacturer: "Sienar Fleet Systems" },
    { id: 24, name: "E-wing", model: "E-wing escort starfighter", manufacturer: "FreiTek Inc." },
    { id: 25, name: "Marauder", model: "Marauder-class corvette", manufacturer: "Unknown" },
    { id: 26, name: "Outland TIE Fighter", model: "TIE/ln Outland Fighter", manufacturer: "Sienar Fleet Systems" },
    { id: 27, name: "N-1 Starfighter", model: "Naboo N-1 starfighter", manufacturer: "Theed Palace Space Vessel Engineering Corps" },
    { id: 28, name: "Mandator IV-class Siege Dreadnought", model: "Mandator IV-class", manufacturer: "Kuat Drive Yards" },
    { id: 29, name: "T-6 Shuttle", model: "T-6 shuttle", manufacturer: "Shuttleworks" },
    { id: 30, name: "Scimitar", model: "Star Courier", manufacturer: "Republic Sienar Systems" }
];

export const getStarships = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(starships);
        }, 1000);
    });
};
