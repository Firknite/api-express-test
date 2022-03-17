import usersRouter from "./users";

export default function principalRouting(express) {
  const app = express();

  app.use("/health", (req, res) =>
    res.status(200).send("The application is healthy!")
  );

  app.use(usersRouter);

  return app;
}