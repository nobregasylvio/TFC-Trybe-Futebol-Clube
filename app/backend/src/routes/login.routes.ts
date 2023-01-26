import { Router } from 'express';
import verifyAuthorization from '../middleware/verifyAuthorization';
import UserController from '../controllers/User.controller';

const router = Router();

const userController = new UserController();

router.get('/validate', verifyAuthorization, userController.validate);
router.post('/', userController.login);

export default router;
