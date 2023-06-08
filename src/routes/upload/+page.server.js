import { fail } from '@sveltejs/kit'

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData()
		const file = formData.get('file')

		if (!file || !file.name) {
			return fail(400, { error: true, message: 'No file uploaded' })
		}

		const res = await fetch('http://localhost:8080/query', {
			method: 'POST',
			headers: {
				'content-type': 'application-json',
			},
			body: JSON.stringify({
				query: `
				query CreateActivity {
					createActivity(input: {
						name: "HI",
						upload: {
							file: ${file},
							fileName: ${file.name},
							fileSize: ${file.fileSize}
						},

					})
				}
				`,
			}),
		})
		console.log(res)
	},
}
