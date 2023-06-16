import { fail } from '@sveltejs/kit'

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData()
		const file = formData.get('file')

		if (!file || !file.name) {
			return fail(400, { error: true, message: 'No file uploaded' })
		}

		const form = new FormData()
		form.append(
			'operations',
			'{ "query": "mutation createActivity($file: Upload!) { createActivity(input: { file: $file }) }", "variables": { "file": null } }'
		)
		form.append('map', '{ "0": ["variables.file"] }')
		form.append('0', file)

		const res = await fetch('http://localhost:8080/query', {
			method: 'POST',
			body: form,
		})

		const json = await res.json()
		console.log(res)
		console.log('json', json)
	},
}
