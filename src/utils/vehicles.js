// Star Wars vehicles data
export const vehicles = [
    { id: 1, name: "Sand Crawler", model: "Digger Crawler", manufacturer: "Corellia Mining Corporation" },
    { id: 2, name: "Speeder Bike", model: "74-Z speeder bike", manufacturer: "Aratech Repulsor Company" },
    { id: 3, name: "AT-AT Walker", model: "All Terrain Armored Transport", manufacturer: "Kuat Drive Yards" },
    { id: 4, name: "AT-ST Walker", model: "All Terrain Scout Transport", manufacturer: "Kuat Drive Yards" },
    { id: 5, name: "Landspeeder", model: "X-34 landspeeder", manufacturer: "SoroSuub Corporation" },
    { id: 6, name: "Snowspeeder", model: "T-47 airspeeder", manufacturer: "Incom Corporation" },
    { id: 7, name: "Imperial Speeder Bike", model: "74-Z speeder bike", manufacturer: "Aratech Repulsor Company" },
    { id: 8, name: "Sail Barge", model: "Khetanna", manufacturer: "Ubrikkian Industries" },
    { id: 9, name: "Dewback", model: "Dewback", manufacturer: "N/A" },
    { id: 10, name: "Bantha-II Cargo Skiff", model: "Bantha-II", manufacturer: "Ubrikkian Industries" },
    { id: 11, name: "Cloud Car", model: "Storm IV Twin-Pod", manufacturer: "Bespin Motors" },
    { id: 12, name: "TIE Crawler", model: "TIE Crawler", manufacturer: "Sienar Technologies" },
    { id: 13, name: "Flash Speeder", model: "Flash speeder", manufacturer: "SoroSuub Corporation" },
    { id: 14, name: "Gungan Bongo Submarine", model: "Tribubble bongo", manufacturer: "Otoh Gunga Bongameken Cooperative" },
    { id: 15, name: "MTT", model: "Multi-Troop Transport", manufacturer: "Baktoid Armor Workshop" },
    { id: 16, name: "AAT", model: "Armored Assault Tank", manufacturer: "Baktoid Armor Workshop" },
    { id: 17, name: "STAP", model: "Single Trooper Aerial Platform", manufacturer: "Baktoid Armor Workshop" },
    { id: 18, name: "Vulture Droid", model: "Vulture-class droid starfighter", manufacturer: "Haor Chall Engineering" },
    { id: 19, name: "Wheel Bike", model: "Tsmeu-6 personal wheel bike", manufacturer: "Z-Gomot Ternbuell Guppat Corporation" },
    { id: 20, name: "LAAT/i", model: "Low Altitude Assault Transport/infantry", manufacturer: "Rothana Heavy Engineering" },
    { id: 21, name: "Imperial Troop Transport", model: "K79-S80 Troop Transport", manufacturer: "Ubrikkian Industries" },
    { id: 22, name: "Tracked Tanker", model: "Imperial Tracked Tanker", manufacturer: "Unknown" },
    { id: 23, name: "Treadable", model: "Treadable", manufacturer: "Unknown" },
    { id: 24, name: "Mandalorian Gauntlet", model: "Kom'rk-class fighter/transport", manufacturer: "MandalMotors" },
    { id: 25, name: "Imperial Juggernaut", model: "HAVw A6 Juggernaut", manufacturer: "Kuat Drive Yards" },
    { id: 26, name: "Outrider", model: "YT-2400 light freighter", manufacturer: "Corellian Engineering Corporation" },
    { id: 27, name: "BARC Speeder", model: "BARC speeder", manufacturer: "Aratech Repulsor Company" },
    { id: 28, name: "V-35 Courier", model: "V-35 landspeeder", manufacturer: "SoroSuub Corporation" },
    { id: 29, name: "Imperial Troop Carrier", model: "ITC", manufacturer: "Unknown" },
    { id: 30, name: "Swoop Bike", model: "Swoop bike", manufacturer: "Mobquet Swoops and Speeders" },
    { id: 31, name: "T-16 Skyhopper", model: "T-16 skyhopper", manufacturer: "Incom Corporation" },
    { id: 32, name: "Fireball", model: "Racer", manufacturer: "Unknown" },
    { id: 33, name: "Gavrok's Speeder", model: "Speeder", manufacturer: "Unknown" },
    { id: 34, name: "Blurrg", model: "Blurrg", manufacturer: "N/A" },
    { id: 35, name: "Riot Control Baton", model: "Baton", manufacturer: "First Order" }
];

export const getVehicles = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vehicles);
        }, 1000);
    });
};
