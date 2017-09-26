import { Router } from 'express'


const router = new Router();

//Ruta web
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});


export default router
