import { app } from '@azure/functions';
import { getStarships } from '../utils/starships.js';

// Route: /starships
app.http('starships', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        const starships = await getStarships();
        return { body: JSON.stringify(starships) };
    }
});

// Route: /starships/{id}
app.http('starshipById', {
    route: 'starships/{id}',
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const id = request.params.id;
        context.log(`Http function processed request for starship id: ${id}`);
        const starships = await getStarships();
        const starship = starships.find(s => String(s.id) === String(id));
        return { body: starship ? JSON.stringify(starship) : `Starship with id ${id} not found` };
    }
});
