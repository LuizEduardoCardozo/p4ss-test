import express from 'express';

import SignupController from './controller/signup';

const router = express.Router();

router.post('/signup', SignupController.signup);

export default router;
