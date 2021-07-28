import path from "path";
import getConfig from 'next/config'
import HTDB from 'HTDBjs';
const { serverRuntimeConfig } = getConfig()

let htdb;

const handler = async (req, res) => {
	console.log("URL", req.url, __dirname);
	if (!htdb) {
		if (process.env.NODE_ENV === "production") {
			console.log("PATH", path.join(process.cwd(), ".next/server/chunks"));
			htdb = new HTDB(path.join(process.cwd(), ".next/server/chunks"), 1);
		} else {
			console.log("PATH", serverRuntimeConfig.PROJECT_ROOT);
			htdb = new HTDB(serverRuntimeConfig.PROJECT_ROOT, 1);
		}
	}

	const html = await htdb.render(req.url.replace('/api',''));
	res.setHeader('content-type', 'text/html');
	res.send(html);
}

export default handler;
