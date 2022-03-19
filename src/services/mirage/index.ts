import { createServer, Factory, Model, Server } from 'miragejs'
import { faker } from '@faker-js/faker';

type User = {
    name: string;
    email:string;
    create_at:string;
}

export function makeServer() {
    const serve =  createServer({
        models: {
            user:Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(index: number) {
                    return `User ${index +1 }`
                },
                email() {
                    return faker.internet.email().toLowerCase();
                },
                createdAt() {
                    return faker.date.recent(10);
                }
            })
        },

        seeds(server) {
            server.createList('user', 200)
        },

        routes() {

            this.namespace = 'api';
            this.timing = 750;

            this.get('/users');
            this.post('/users');

            this.namespace = '';
            this.passthrough()
        }
    })

    return serve;
}
