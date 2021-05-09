// import twitchStreamer from '../models/twitchModel';
import { getTopGames } from '../services/twichServices.js'
import request from 'request';
// const request = require('request');

export const getTwitchStreamer = (req, res) => {
    
};

export const getAllTwitchStreamers = async (req, response) => {
    // const games = await getTopGames();
    // console.log("games.....", games)
    // res.json(games);
    async function gameRequest(accessToken){

        const gameOptions = {
            url: 'https://api.twitch.tv/helix/search/channels?query=valorant',
            method: 'GET',
            headers: {
                'Client-ID': process.env.CLIENT_ID,
                'Authorization': 'Bearer ' + accessToken
            }
        }

        if(!accessToken){
            console.log("No Token");
        }else{
            console.log("GameOption", gameOptions);

            request.get(gameOptions, async (err, res, body) => {
                if (err) {
                    return console.log(err);
                }

                console.log(`Status: ${res.statusCode}`);
                console.log(JSON.parse(body));
                response.send(JSON.parse(body));
            });
            
        };
    }

    const options = {
        url: 'https://id.twitch.tv/oauth2/token',
        json: true,
        body: {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: 'client_credentials'
        }
    };

    const mainRequest = request.post(options, async (err, res, body) => {
        if(err){
            return console.log(err);
        }
        console.log(`Status: ${res.statusCode}`);
        console.log("Access token",body.access_token);
        return await gameRequest(body.access_token);
    });

};

export const createTwitchStreamer = (req, res) => {

};

export const updateTwitchStreamer = (req, res) => {

};

export const deleteTwitchStreamer = (req, res) => {

};

