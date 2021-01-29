import { Router } from "express";
const router = Router();

import * as newsCtrl from './noticia.controller';

router.get('/news', newsCtrl.getNews);
router.get('/news/:id', newsCtrl.getNewsById);
router.post('/news', newsCtrl.createNews);
router.delete('/news/:id', newsCtrl.deleteNews);
router.put('/news/:id', newsCtrl.updateNews);


export default router