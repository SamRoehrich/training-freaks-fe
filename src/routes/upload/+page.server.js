import { fail } from '@sveltejs/kit'

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData()
		const file = formData.get('file')

		if (!file || !file.name) {
			return fail(400, { error: true, message: 'No file uploaded' })
		}

		const res = await fetch('http://localhost:8080/upload', {
			method: 'POST',
			body: formData,
		})

		const ok = res.ok

		if (ok) return 'ok'
	},
}
