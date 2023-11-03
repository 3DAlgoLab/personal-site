import { error } from "console"

export async function load({ fetch }) {
	try {
		const url = "https://zenquotes.io/api/random"
		const response = await fetch(url)
		const json = await response.json()
		if (!json[0] || !json[0].q) {
			throw error(500, "Quote api went wrong")
		}

		return json[0]
	} catch (e) {
		console.error(e)
	}
}
