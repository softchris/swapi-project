import { app } from '@azure/functions';

app.http('root', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('Http function processed request for root');
        return {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: 'Welcome to the SWAPI Azure Functions Project! 🌌',
                resources: [
                    '/api/planets',
                    '/api/planets/{id}',
                    '/api/characters',
                    '/api/characters/{id}',
                    '/api/films',
                    '/api/films/{id}',
                    '/api/species',
                    '/api/species/{id}',
                    '/api/starships',
                    '/api/starships/{id}',
                    '/api/vehicles',
                    '/api/vehicles/{id}'
                ]
            })
        };
    }
});
