// From https://github.com/hapijs/hapi/blob/master/API.md#catch-all-route
import {Request, ResponseToolkit, Server, ServerOptions, ServerRoute} from "hapi";

const options: ServerOptions = {
    port: 8000,
};
const server = new Server(options);

const handler = function (request: Request, h: ResponseToolkit) {
    return h.response('The page was not found').code(404);
};
server.route({ method: '*', path: '/{p*}', handler });

server.start();
console.log(`Server running at: ${server.info!.uri}`);
