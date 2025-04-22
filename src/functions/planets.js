import { app } from '@azure/functions';
import { getPlanets } from '../utils/planets.js';

// Route: /planets
app.http('planets', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        const planets = await getPlanets();
        return { body: JSON.stringify(planets) };
    }
});

// Route: /planets/{id}
app.http('planetById', {
    route: 'planets/{id}',
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const id = context.bindingData.id;
        context.log(`Http function processed request for planet id: ${id}`);
        const planets = await getPlanets();
        const planet = planets.find(p => String(p.id) === String(id));
        return { body: planet ? JSON.stringify(planet) : `Planet with id ${id} not found` };
    }
});