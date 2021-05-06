// import twitchStreamer from '../models/twitchModel';
import {getTopGames} from '../services/twichServices.js'

exports.getTwitchStreamer = (req, res) => {
    
};

exports.getAllTwitchStreamers = async (req, res) => {
    const games = await getTopGames();
    console.log("games.....", games)
    res.json(games);
};

exports.createTwitchStreamer = (req, res) => {

};

exports.updateTwitchStreamer = (req, res) => {

};

exports.deleteTwitchStreamer = (req, res) => {

};