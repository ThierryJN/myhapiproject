/**
 * Created by thierryn1 on 8/1/2015.
 */
var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world !!');
    }
});

var handler = function (request, reply) {
    var user = request.params.name ? encodeURIComponent(request.params.name) : 'stranger';
    reply('Hello, ' + user + '!');
}
/*
server.route({
    method: 'GET',
    path: '/greetings/name='+'{name?}',
    handler: handler
});
*/
server.route({
    method: 'GET',
    path: '/greetings/{name?}',
    handler: handler
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});