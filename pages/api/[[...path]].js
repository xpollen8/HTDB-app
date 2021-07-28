import path from "path";
import getConfig from 'next/config'
import HTDB from 'HTDBjs';
const { serverRuntimeConfig } = getConfig()

let htdb;

const handler = async (req, res) => {
	if (!htdb) {
		if (process.env.NODE_ENV === "production") {
			htdb = new HTDB(path.join(process.cwd(), ".next/server/chunks"), 0);
		} else {
			htdb = new HTDB(serverRuntimeConfig.PROJECT_ROOT, 1);
		}
	}

	const html = await htdb.render(req.url.replace('/api',''));
	res.setHeader('content-type', 'text/html');
	res.send(html);
}

export default handler;
