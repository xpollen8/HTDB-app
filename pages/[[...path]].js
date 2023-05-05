import { join } from "path";
import getConfig from 'next/config'
import Head from 'next/head'
import HTDB from 'HTDBjs';

const { serverRuntimeConfig } = getConfig()

let htdb;

export async function getServerSideProps({ params: { path = [] } = {} }) {
	if (!htdb) {
		if (process.env.NODE_ENV === "production") {
			console.log("PROD");
			htdb = new HTDB(join(process.cwd(), ".next/server/chunks"), 0);
			console.log("PROD.path", join(process.cwd(), ".next/server/chunks"));
		} else {
			console.log("!PROD");
			const { serverRuntimeConfig } = getConfig();
			console.log("!PROD.path", serverRuntimeConfig.PROJECT_ROOT);
			htdb = new HTDB(serverRuntimeConfig.PROJECT_ROOT, 1);
		}
	}

	return {
		props: { body: await htdb.render(path.join('/')) }
	}
}

const App = ({ body }) => (
	<div className="container">
		<Head>
			<title>HTDB-based application</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<>
			{ <div dangerouslySetInnerHTML={{ __html: body }} /> }
		</>
	</div>
)

export default App;
