import { app } from '@azure/functions';
import { getCharacters } from '../utils/characters.js';

// Route: /characters/{id}
app.http('characterById', {
    route: 'characters/{id}',
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const id = request.params.id;
        context.log(`Http function processed request for character id: ${id}`);
       
        const characters = await getCharacters();
        // Find by id property, not array index
        const character = characters.find(c => String(c.id) === String(id));
        return { body: character ? JSON.stringify(character) : `Character with id ${id} not found` };
    }
});

// Route: /characters
app.http('characters', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        const characters = await getCharacters();
        return { body: JSON.stringify(characters) };
    }
});

