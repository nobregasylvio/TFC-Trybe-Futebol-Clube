import { Router } from 'express';
import LeaderboardController from '../controllers/Leaderboard.controller';

const router = Router();

const leaderboardController = new LeaderboardController();

router.get('/home', leaderboardController.getHome);
router.get('/away', leaderboardController.getAway);
router.get('/', leaderboardController.getAll);

export default router;
