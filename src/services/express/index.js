import express from 'express'
import forceSSL from 'express-force-ssl'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { errorHandler as queryErrorHandler } from 'querymen'
import { errorHandler as bodyErrorHandler } from 'bodymen'
import { env } from '../../config'

export default (routes) => {
	const app = express()

	/* istanbul ignore next */
	if (env === 'production') {
		app.set('forceSSLOptions', {
			enable301Redirects: false,
			trustXFPHeader: true
		})
		app.use(forceSSL)
	}

	/* istanbul ignore next */
	if (env === 'production' || env === 'development') {
		app.use(cors())
		app.use(compression())
		app.use(morgan('dev'))
	}

	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.json())
	app.use(routes)
	app.use(queryErrorHandler())
	app.use(bodyErrorHandler())





  //Agregamos aquellos modulos necesarios para renderizar vistas

  /**
  **  Ruta a las vistas
  **/
  var path = require('path');
  app.set('views', path.join(__dirname, '../../../views'));
  app.use(express.static(path.join(__dirname, '../../../public')));


  /**
  ** Motor de vistas
  **/
  var cons = require('consolidate');
  app.engine('html', cons.swig)
  app.set('views', path.join(__dirname, '../../../views'));
  app.set('view engine', 'html');




  /**
  ** CookieParser
  **/
  var cookieParser = require('cookie-parser');
  app.use(cookieParser());





	return app
}
