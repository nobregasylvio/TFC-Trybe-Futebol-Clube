import { Router } from 'express';
import MatchController from '../controllers/Match.controller';
import verifyAuthorization from '../middlewares/verifyAuthorization';

const router = Router();

const matchController = new MatchController();

router.get('/', matchController.getMatches);
router.post('/', verifyAuthorization, matchController.createMatch);
router.patch('/:id/finish', matchController.changeInProgress);
router.patch('/:id', matchController.updateGoals);

export default router;
