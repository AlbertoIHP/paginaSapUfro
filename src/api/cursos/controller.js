import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Cursos } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
	Cursos.create(body)
		.then((cursos) => cursos.view(true))
		.then(success(res, 201))
		.catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
	Cursos.find(query, select, cursor)
		.then((cursos) => cursos.map((cursos) => cursos.view()))
		.then(success(res))
		.catch(next)

export const show = ({ params }, res, next) =>
	Cursos.findById(params.id)
		.then(notFound(res))
		.then((cursos) => cursos ? cursos.view() : null)
		.then(success(res))
		.catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
	Cursos.findById(params.id)
		.then(notFound(res))
		.then((cursos) => cursos ? _.merge(cursos, body).save() : null)
		.then((cursos) => cursos ? cursos.view(true) : null)
		.then(success(res))
		.catch(next)

export const destroy = ({ params }, res, next) =>
	Cursos.findById(params.id)
		.then(notFound(res))
		.then((cursos) => cursos ? cursos.remove() : null)
		.then(success(res, 204))
		.catch(next)
