import { app } from '@azure/functions';
import { getPlanets } from '../utils/planets.js';

// Route: /planets
app.http('planets', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        const planets = await getPlanets();
        return { body: `Here are the planets: ${JSON.stringify(planets)}` };
    }
});

// Route: /planets/{id}
app.http('planetById', {
    route: 'planets/{id}',
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const id = request.params.id;
        context.log(`Http function processed request for planet id: ${id}`);
        // Example: return planet by index (id as array index)
        const planets = await getPlanets();
        const planet = planets[id] || null;
        return { body: planet ? JSON.stringify(planet) : `Planet with id ${id} not found` };
    }
});
