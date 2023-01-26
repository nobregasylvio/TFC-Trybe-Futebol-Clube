import { Router } from 'express';
import TeamController from '../controllers/Team.controller';

const router = Router();

const teamController = new TeamController();

router.get('/', teamController.findAll);
router.get('/:id', teamController.findById);

export default router;
