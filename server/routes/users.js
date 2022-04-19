import {
    getUser,
    addUser,
    updateUser,
    deleteUser,
    userHandlers,
} from '../controllers/user.controller';

import axiosService from '../services/axios.service';

export default function usersRouting(router) {
    router.get('/:id?', async (req, res) => {
        const baseUrl = 'https://jsonplaceholder.typicode.com/users';
        const { data } = await userHandlers(axiosService).getUser(
            baseUrl,
            req.query.id
        );
        res.send(data).status(200);
    });

    router.post('/', async function (req, res) {
        const { data } = await addUser(req.body.user);
        res.send(data).status(201);
    });

    router.put('/', async (req, res) => {
        const { data } = await updateUser(req.body.user);
        res.send(data).status(204);
    });

    router.delete('/:id', async (req, res) => {
        try {
            if (req.query.id) {
                await deleteUser(req.query.id);
                res.send({ message: 'delete successfull' }).status(200);
            } else {
                res.send({ message: 'param id is required' }).status(403);
            }
        } catch (error) {
            res.send(error).status(502);
        }
    });

    return router;
}
