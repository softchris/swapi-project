import { app } from '@azure/functions';
import { getVehicles } from '../utils/vehicles.js';

// Route: /vehicles
app.http('vehicles', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        const vehicles = await getVehicles();
        return { body: JSON.stringify(vehicles) };
    }
});

// Route: /vehicles/{id}
app.http('vehicleById', {
    route: 'vehicles/{id}',
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const id = request.params.id;
        context.log(`Http function processed request for vehicle id: ${id}`);
        const vehicles = await getVehicles();
        const vehicle = vehicles.find(v => String(v.id) === String(id));
        return { body: vehicle ? JSON.stringify(vehicle) : `Vehicle with id ${id} not found` };
    }
});
