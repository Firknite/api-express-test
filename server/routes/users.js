import { getUser } from "../controllers/user.controller";

export default function usersRouting(router) {
  
  router.get("/", async function (req, res) {
    const { data } = await getUser(req);
    res.send(data).status(200);
  });

  return router;
}
