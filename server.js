/**
 * Reference site: https://www.codementor.io/@shanewignall/making-a-restful-backend-with-node-js-knf7nbsii
 */
import app from './app';

const port = process.env.PORT || '3000';
app.listen(port);

console.log(`Listening on port ${port}`);