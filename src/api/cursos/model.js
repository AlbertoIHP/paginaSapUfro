import mongoose, { Schema } from 'mongoose'

const cursosSchema = new Schema({
	name: {
		type: String,
	 unique: true,
	required: true
	},
	description: {
		type: String,
	required: true
	},
	date: {
		type: String,
	required: true
	},
  place: {
	type: String,
	required: true
  },
  activated: {
	type: Boolean,
  default: true
  }
}, {
	timestamps: true
})

cursosSchema.methods = {
	view (full) {
		const view = {
			// simple view
			id: this.id,
			name: this.name,
			description: this.description,
			date: this.date,
		  place: this.place,
	    activated: this.activated,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt
		}

		return full ? {
			...view
			// add properties for a full view
		} : view
	}
}

const model = mongoose.model('Cursos', cursosSchema)

export const schema = model.schema
export default model
