import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.status(200).send("Hola buenas tardes");
});

export default router;
