const create = async (payload) => {
	const res = await fetch('/survey', {
		method: 'POST',
		body: JSON.stringify(payload)
	})
	const json = await res.json()
	return json
}

const getAll = async () => {
	const res = await fetch('/survey')
	const json = await res.json()
	return json
}

const getById = async (id) => {
	const res = await fetch(`/survey/${id}`)
	const json = await res.json()
	return json
}

const putById = async (id) => {
	const res = await fetch(`/survey/${id}`, {
		method: 'PUT'
	})
	const json = await res.json()
	return json
}

const deleteById = async (id) => {
	const res = await fetch(`/survey/${id}`, {
		method: 'DELETE'
	})
	const json = await res.json()
	return json
}

module.exports = {
	create,
	getAll,
	getById,
	putById,
	deleteById
}
