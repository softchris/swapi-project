import { app } from '@azure/functions';
import { getSpecies } from '../utils/species.js';

// Route: /species
app.http('species', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        const species = await getSpecies();
        return { body: JSON.stringify(species) };
    }
});

// Route: /species/{id}
app.http('speciesById', {
    route: 'species/{id}',
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const id = request.params.id;
        context.log(`Http function processed request for species id: ${id}`);
        const species = await getSpecies();
        const specie = species.find(s => String(s.id) === String(id));
        return { body: specie ? JSON.stringify(specie) : `Species with id ${id} not found` };
    }
});
