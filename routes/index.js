import {getAllTwitchStreamers, createTwitchStreamer, getTwitchStreamer, updateTwitchStreamer, deleteTwitchStreamer} from '../controllers/twitchController.js';

export default (app) => {
    app.route('/twitchStreamers')
        .get(getAllTwitchStreamers)
        .post(createTwitchStreamer);

    app.route('/twitchStreamers/twitchStreamerName')
        .get(getTwitchStreamer)
        .put(updateTwitchStreamer)
        .delete(deleteTwitchStreamer);
};