import express from 'express';
import {
    deleteVideo,
    getVideoById,
    getVideos,
    saveVideo,
    updateVideo
} from '../controllers/videoController.js';

const router = express.Router();

router.get('/videos', getVideos);
router.get('/video/:id', getVideoById);
router.post('/video', saveVideo);
router.patch('/video/:id', updateVideo);
router.delete('/video/:id', deleteVideo);

export default router;