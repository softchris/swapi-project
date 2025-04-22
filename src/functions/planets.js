import { app } from '@azure/functions';
import { getPlanets } from '../utils/planets.js'; // Ensure .js extension is included

app.http('planets', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        
        const planets = await getPlanets();

        return { body: `Here are the planets: ${JSON.stringify(planets)}` };
    }
});
