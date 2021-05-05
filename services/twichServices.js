import TwitchJS from 'twitch-js';
require('dotenv').config('../.env'); //configuring dotenv file

const username = process.env.USERNAME;
const token = process.env.TOKEN;
const twitchJS = new TwitchJS({
    username,
    token
})

export function getValorantStreamers(){
    console.log("username", username, "token", token);
    twitchJS.api.get('streams', {
        search: {
            game: 'Valorant'
        }
    }).then(res => {
        console.log("res", res)
    }).catch(err => {
        console.log("Error", err);
    })
}