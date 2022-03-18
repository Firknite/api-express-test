import { getUser, addUser } from '../controllers/user.controller'

export default function usersRouting(router) {
    router.get('/:id?', async function (req, res) {
        const { data } = await getUser(req.query.id)
        res.send(data).status(200)
    })

    router.post('/', async function (req, res) {
        // const dataMock = {
        //     "id": 11,
        //     "name": "Nicolas Herrera",
        //     "username": "Enemyers",
        //     "email": "enemyers@hotmail.cl",
        //     "address": {
        //         "street": "Lomas Turbas 6969",
        //         "suite": "shorter",
        //         "city": "Santiago",
        //         "zipcode": "99999-1111",
        //         "geo": {
        //             "lat": "-40.3159",
        //             "lng": "36.1496"
        //         }
        //     },
        //     "phone": "+56912345678",
        //     "website": "myers.org",
        //     "company": {
        //         "name": "cuatro I",
        //         "catchPhrase": "",
        //         "bs": ""
        //     }
        // }
        const { data } = await addUser(req.body.user)
        res.send(data).status(200)
    })

    return router
}
