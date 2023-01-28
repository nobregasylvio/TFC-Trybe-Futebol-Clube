import { Router } from 'express';
import MatchController from '../controllers/Match.controller';

const router = Router();

const matchController = new MatchController();

router.get('/', matchController.getMatches);

export default router;
