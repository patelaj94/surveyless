export default async function (payload) {
	const res = await fetch("/dev", {
		method: 'POST',
		body: payload
	})
	const json = await res.json()
	return json
}
