import { mongoose } from "mongoose";

export const productSchema = new mongoose.Schema({
    linkProduct: {
        type: String,
        required: true,
    },
    linkImage: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
})

// export default mongoose.model('Product', productSchema);