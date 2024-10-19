import { Router } from "express";
// import { query } from "express-validator";

const router = Router()

router.get('/', (req, res) => {
  res.send('Hello User!');
});

export default router;