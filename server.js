/**
 * Reference site: https://www.codementor.io/@shanewignall/making-a-restful-backend-with-node-js-knf7nbsii
 * https://github.com/twitch-js/twitch-js#getting-started
 */
import app from './app.js';
import dotenv from 'dotenv';
dotenv.config()
// require('dotenv').config(); //configuring dotenv file

const port = process.env.PORT || '3000';
app.listen(port);

console.log(`Listening on port ${port}`);