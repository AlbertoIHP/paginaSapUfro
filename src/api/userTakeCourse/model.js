import mongoose, { Schema } from 'mongoose'

const userTakeCourseSchema = new Schema({
	idEstudiante: {
		type: String
	},
	idCurso: {
		type: String
	}
}, {
	timestamps: true
})

userTakeCourseSchema.methods = {
	view (full) {
		const view = {
			// simple view
			id: this.id,
			idEstudiante: this.idEstudiante,
			idCurso: this.idCurso,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt
		}

		return full ? {
			...view
			// add properties for a full view
		} : view
	}
}

const model = mongoose.model('UserTakeCourse', userTakeCourseSchema)

export const schema = model.schema
export default model
