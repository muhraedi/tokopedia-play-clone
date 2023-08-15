import { mongoose } from "mongoose";

const commentSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String,
    },
    comment: {
        required: true,
        type: String,
    },
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video',
    }
}, { timestamps: true })

export default mongoose.model('Comment', commentSchema);