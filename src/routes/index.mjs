import { Router } from "express";
import userRoutes from './users.mjs'

const router = Router()

router.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
router.use('/user', userRoutes)

export default router;