import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { UserTakeCourse } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
	UserTakeCourse.create(body)
		.then((userTakeCourse) => userTakeCourse.view(true))
		.then(success(res, 201))
		.catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
	UserTakeCourse.find(query, select, cursor)
		.then((userTakeCourses) => userTakeCourses.map((userTakeCourse) => userTakeCourse.view()))
		.then(success(res))
		.catch(next)

export const show = ({ params }, res, next) =>
	UserTakeCourse.findById(params.id)
		.then(notFound(res))
		.then((userTakeCourse) => userTakeCourse ? userTakeCourse.view() : null)
		.then(success(res))
		.catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
	UserTakeCourse.findById(params.id)
		.then(notFound(res))
		.then((userTakeCourse) => userTakeCourse ? _.merge(userTakeCourse, body).save() : null)
		.then((userTakeCourse) => userTakeCourse ? userTakeCourse.view(true) : null)
		.then(success(res))
		.catch(next)

export const destroy = ({ params }, res, next) =>
	UserTakeCourse.findById(params.id)
		.then(notFound(res))
		.then((userTakeCourse) => userTakeCourse ? userTakeCourse.remove() : null)
		.then(success(res, 204))
		.catch(next)
