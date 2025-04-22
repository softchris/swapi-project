import { app } from '@azure/functions';
import { getFilms } from '../utils/films.js';

// Route: /films
app.http('films', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        const films = await getFilms();
        return { body: JSON.stringify(films) };
    }
});

// Route: /films/{id}
app.http('filmById', {
    route: 'films/{id}',
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const id = request.params.id;
        context.log(`Http function processed request for film id: ${id}`);
        const films = await getFilms();
        const film = films.find(f => String(f.id) === String(id));
        return { body: film ? JSON.stringify(film) : `Film with id ${id} not found` };
    }
});
