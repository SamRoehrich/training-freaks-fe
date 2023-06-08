import { fail } from '@sveltejs/kit'

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData()
		const email = formData.get('email')
		const reqHeaders = new Headers()
		reqHeaders.append('Content-Type', 'application/json')
		const query = JSON.stringify({
			query: `mutation JoinWaitlist { joinWaitlist(input:{ email: "${email}"})}`,
			variables: {},
		})

		if (!email) {
			return fail(500, {
				success: false,
				message: 'Email is required.',
			})
		}

		const res = await fetch('http://localhost:8080/query', {
			method: 'POST',
			headers: reqHeaders,
			body: query,
		})

		const json = await res.json()
		if (res.status === 200) {
			return {
				success: true,
			}
		}
		return {
			success: false,
			message: 'Failed to enroll in wait list.',
		}
	},
}
