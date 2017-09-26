import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Cursos, { schema } from './model'

const router = new Router()
const { name, description, date, user, place } = schema.tree
const estructuraPeticion = { name, description, date, user, place } ;

/**
 * @api {post} /cursos Create cursos
 * @apiName CreateCursos
 * @apiGroup Cursos
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam name Cursos's name.
 * @apiParam description Cursos's description.
 * @apiParam date Cursos's date.
 * @apiParam user Cursos's user.
 * @apiSuccess {Object} cursos Cursos's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cursos not found.
 * @apiError 401 user access only.
 */
router.post('/',
	token({ required: true }),
	body(estructuraPeticion),
	create)

/**
 * @api {get} /cursos Retrieve cursos
 * @apiName RetrieveCursos
 * @apiGroup Cursos
 * @apiUse listParams
 * @apiSuccess {Object[]} cursos List of cursos.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  token({required: true}),
	query(),
	index)

/**
 * @api {get} /cursos/:id Retrieve cursos
 * @apiName RetrieveCursos
 * @apiGroup Cursos
 * @apiSuccess {Object} cursos Cursos's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cursos not found.
 */
router.get('/:id',
  token({required: true}),
	show)

/**
 * @api {put} /cursos/:id Update cursos
 * @apiName UpdateCursos
 * @apiGroup Cursos
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam name Cursos's name.
 * @apiParam description Cursos's description.
 * @apiParam date Cursos's date.
 * @apiParam user Cursos's user.
 * @apiSuccess {Object} cursos Cursos's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cursos not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
	token({ required: true }),
	body(estructuraPeticion),
	update)

/**
 * @api {delete} /cursos/:id Delete cursos
 * @apiName DeleteCursos
 * @apiGroup Cursos
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Cursos not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
	token({ required: true }),
	destroy)

export default router
