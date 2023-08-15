import { mongoose } from "mongoose";

import { productSchema } from "./productModel.js";

const videoSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    urlVideo: {
        required: true,
        type: String
    },
    urlImageThumbnail: {
        required: true,
        type: String
    },
    views: {
        type: Number
    },
    products: [productSchema]
}, { timestamps: true })

export default mongoose.model('Video', videoSchema);