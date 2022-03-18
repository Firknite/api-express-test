import usersRouting from './users'

export default function principalRouting(express) {
    const app = express()
    const router = express.Router()

    app.use('/health', (req, res) =>
        res.status(200).send('The application is healthy!')
    )

    app.use('/users', usersRouting(router))

    return app
}
