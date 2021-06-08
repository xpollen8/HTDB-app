const URL = 'http://localhost:3002';

const fetch_data = async (url) => {
	const { results, error } = await fetch(`${URL}${url}`)
		.then(async res => await res.json())
		.then(res => {
			if (res.error) {
				const error = { field: res.field, message: res.error }
				return { error }
			} else {
				return { results: res };
			}
		})
		.catch((error) => {
			return { error: { field: 'fetch', message: error.message } };
		});
	return JSON.parse(JSON.stringify({ results, error }));
}

module.exports = fetch_data;
