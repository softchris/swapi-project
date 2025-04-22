// Star Wars vehicles data
export const vehicles = [
    { id: 1, name: "Sand Crawler", model: "Digger Crawler", manufacturer: "Corellia Mining Corporation" },
    { id: 2, name: "Speeder Bike", model: "74-Z speeder bike", manufacturer: "Aratech Repulsor Company" },
    { id: 3, name: "AT-AT Walker", model: "All Terrain Armored Transport", manufacturer: "Kuat Drive Yards" }
];

export const getVehicles = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vehicles);
        }, 1000);
    });
};
