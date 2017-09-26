import mongoose, { Schema } from 'mongoose'

const userTakeCourseSchema = new Schema({
	matriculaEstudiante: {
		type: String
	},
	nameCurso: {
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
			matriculaEstudiante: this.matriculaEstudiante,
			nameCurso: this.nameCurso,
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
