
import dotenv from 'dotenv';
import express from 'express';

import blogRouter from './routes/blogRouter';

// load the environment variables from the .env file
dotenv.config({
  path: '.env'
});

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
  public app = express();
}

// initialize server app
const server = new Server();

// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();

// server.app.get('/', (req, res) => {
//   res.send({
//     message: 'hello world',
//   });
// });

server.app.use('/rest/api/blog', blogRouter);