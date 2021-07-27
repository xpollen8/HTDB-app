import getConfig from 'next/config'
import HTDB from 'HTDBjs';
const { publicRuntimeConfig } = getConfig()

let htdb;

const handler = async (req, res) => {
	console.log("URL", req.url);
	if (!htdb) {
		htdb = new HTDB(publicRuntimeConfig.staticFolder, 1);
	}

	const html = await htdb.render(req.url.replace('/api',''));
	res.setHeader('content-type', 'text/html');
	res.send(html);
}

export default handler;
