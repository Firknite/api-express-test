import express from 'express';
import usersRouting from './users';

const router = express.Router();

router.use('/health', (req, res) =>
    res.status(200).send('The application is healthy!')
);

router.use('/users', usersRouting(router));

export default router;
