export class SubjectDTO {
	/**
	 *
	 * @returns { String }
	 */
	get name() {
		return this.name;
	}

	/**
	 *
	 * @param {String} name
	 * @returns { void }
	 */
	set name(name) {
		if (!name) {
			throw new Error('Name cannot be null');
		}

		if (name.length < 3) {
			throw new Error('Name cannot have less than 3 (three) letters');
		}

		this.name = name;
	}

	/**
	 *
	 * @returns {String}
	 */
	get teacherId() {
		return this.teacherId;
	}

	/**
	 * @param {String} name
	 * @returns { void }
	 */
	set teacherId(teacherId) {
		if (!teacherId) {
			throw new Error('TeacherId cannot be null');
		}

		this.teacherId = teacherId;
	}
}
