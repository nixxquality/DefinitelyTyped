// From https://github.com/hapijs/hapi/blob/master/API.md#-servertablehost
import {Request, ResponseToolkit, Server, ServerOptions, ServerRoute} from "hapi";

const options: ServerOptions = {
    port: 8000,
};

const server = new Server(options);
server.app.key = 'value2';

server.route({
    path: '/',
    method: 'GET',
    handler: function (request: Request, h: ResponseToolkit) {
        return h.response("Hello World");
    }
});

server.start();
const table = server.table();
console.log(table);
console.log(`Server running at: ${server.info!.uri}`);
