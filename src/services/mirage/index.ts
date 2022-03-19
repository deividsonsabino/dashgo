import { createServer, Model, Server } from 'miragejs'

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
