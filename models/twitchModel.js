import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create databse scheme for TwitchStreamers
 */
const TwitchStreamerScheme = new Schema({

});

export default mongoose.model('TwitchStreamer', StreamerScheme);