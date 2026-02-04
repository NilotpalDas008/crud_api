import express from 'express';
import {getTasks,addTasks,updateTasks,deleteTasks} from  '../controllers/taskController.js';

const router = express.Router();

router.get('/',getTasks);
router.post('/',addTasks);
router.put('/:id',updateTasks);
router.delete('/:id',deleteTasks);

export default router;