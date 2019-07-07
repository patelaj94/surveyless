const send = async (payload) => {
	const res = await fetch('/surveyResponses', {
		method: 'POST',
		body: JSON.stringify(payload)
	})
	const json = await res.json()
	return json
}

const getAll = async () => {
	const res = await fetch('/surveyResponses')
	const json = await res.json()
	return json
}

const getById = async (id) => {
	const res = await fetch(`/surveyResponses/${id}`)
	const json = await res.json()
	return json
}

const deleteById = async (id) => {
	const res = await fetch(`/surveyResponses/${id}`, {
		method: 'DELETE'
	})
	const json = await res.json()
	return json
}


module.exports = {
	send,
	getAll,
	getById,
	deleteById
}
