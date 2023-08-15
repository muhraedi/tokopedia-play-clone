import Video from '../models/videoModel.js';

const getProductsByVideoId = async (req, res) => {
    try {
        const products = await Video.findById(req.params.videoId, { _id: 0, products: 1 });
        res.json(products);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export { getProductsByVideoId }