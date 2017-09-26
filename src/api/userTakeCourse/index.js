import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export UserTakeCourse, { schema } from './model'

const router = new Router()
const { matriculaEstudiante, nameCurso } = schema.tree

/**
 * @api {post} /userTakeCourses Create user take course
 * @apiName CreateUserTakeCourse
 * @apiGroup UserTakeCourse
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam matriculaEstudiante User take course's matriculaEstudiante.
 * @apiParam nameCurso User take course's nameCurso.
 * @apiSuccess {Object} userTakeCourse User take course's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User take course not found.
 * @apiError 401 user access only.
 */
router.post('/',
	token({ required: true }),
	body({ matriculaEstudiante, nameCurso }),
	create)

/**
 * @api {get} /userTakeCourses Retrieve user take courses
 * @apiName RetrieveUserTakeCourses
 * @apiGroup UserTakeCourse
 * @apiUse listParams
 * @apiSuccess {Object[]} userTakeCourses List of user take courses.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  token({required: true}),
	query(),
	index)

/**
 * @api {get} /userTakeCourses/:id Retrieve user take course
 * @apiName RetrieveUserTakeCourse
 * @apiGroup UserTakeCourse
 * @apiSuccess {Object} userTakeCourse User take course's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User take course not found.
 */
router.get('/:id',
  token({required: true}),
	show)

/**
 * @api {put} /userTakeCourses/:id Update user take course
 * @apiName UpdateUserTakeCourse
 * @apiGroup UserTakeCourse
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam matriculaEstudiante User take course's matriculaEstudiante.
 * @apiParam nameCurso User take course's nameCurso.
 * @apiSuccess {Object} userTakeCourse User take course's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User take course not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
	token({ required: true }),
	body({ matriculaEstudiante, nameCurso }),
	update)

/**
 * @api {delete} /userTakeCourses/:id Delete user take course
 * @apiName DeleteUserTakeCourse
 * @apiGroup UserTakeCourse
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 User take course not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
	token({ required: true }),
	destroy)

export default router
