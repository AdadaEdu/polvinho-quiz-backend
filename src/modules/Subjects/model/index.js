import mongoose from 'mongoose';

const SubjectSchema = new mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.UUID,
		default: () => crypto.randomUUID(),
	},
	name: { type: String, unique: true, required: true },
	teacherId: {
		type: mongoose.Schema.Types.UUID,
		ref: 'User',
		required: true,
	},
	students: [{ type: mongoose.Schema.Types.UUID, ref: 'User' }], // Lista de alunos matriculados
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
	isDeleted: { type: Boolean, default: false },
});

export const SubjectModel = mongoose.model('Subject', SubjectSchema);
