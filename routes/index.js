import twitchStreamer from '../controllers/twitchController';

export default (app) => {
    app.route('/twitchStreamers')
        .get(twitchStreamer.getAllTwitchStreamers)
        .port(twitchStreamer.createTwitchStreamer);

    app.route('/twitchStreamers/:twitchStreamerID')
        .get(twitchStreamer.getTwitchStreamer)
        .put(twitchStreamer.updateTwitchStreamer)
        .delete(twitchStreamer.deleteTwitchStreamer);
};