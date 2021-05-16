/* eslint-disable linebreak-style */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '13.212.210.67',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
// console.log('Hallo kita akan membuat RESTful API');