import express from 'express';
import { addScript } from '../Controller/userScript.js';

const router= express.Router();

router.post('/addScript', addScript)


export default router;
