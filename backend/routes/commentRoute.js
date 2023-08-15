import express from 'express';
import { getCommentsByVideoId, submitComment } from '../controllers/commentController.js';

const router = express.Router();

router.get('/comments/:videoId', getCommentsByVideoId)
router.post('/comment', submitComment);

export default router;