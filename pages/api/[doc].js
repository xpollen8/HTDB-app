import HTDB from 'HTDBjs';

let htdb;

const fetchSwipe = async (doc) => {
	if (!htdb) {
		htdb = new HTDB('site.htdb', 0);
		await htdb.load();
	}
	return { body: await htdb.render(doc) }
}

const handler = async (req, res) => {
	const { id } = req.query || 0;
	res.send(await fetchSwipe(id));
}

export default handler;
