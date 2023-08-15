import Comment from '../models/commentModel.js';

export const getCommentsByVideoId = async (req, res) => {
    try {
        const comments = await Comment.find({videoId: req.params.videoId});
        res.json(comments);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const submitComment = async (req, res) => {
    const { username, comment, videoId } = req.body;
    try {
        const doc = await new Comment({ username, comment, videoId })
        await doc.save();
        res.status(201).json({message: "Success"});
    } catch (error) {
        res.status(400).json({message: "Fail"});
    }
}