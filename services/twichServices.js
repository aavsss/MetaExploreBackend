import TwitchJS from 'twitch-js';
require('dotenv').config('../.env'); //configuring dotenv file
const request = require('request');
// 516575 Valorant game id
// for queries. put ? before. eg. streams?game_id=516575

export async function getTopGames(){

    async function gameRequest(accessToken){
        const gameOptions = {
            url: 'https://api.twitch.tv/helix/games/top',
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

            const gameRequest = async() => request.get(gameOptions, async (err, res, body) => {
                if (err) {
                    return console.log(err);
                }

                console.log(`Status: ${res.statusCode}`);
                console.log(JSON.parse(body));
                return await body;
            });
            
            const ress = await gameRequest();
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

    await mainRequest();
}
