import * as PATH from "path";
import getConfig from 'next/config'
import Head from 'next/head'
import HTDB from 'HTDBjs';

const { serverRuntimeConfig } = getConfig()

let htdb;

export async function getServerSideProps({ params: { path = [] } = {} }) {
	if (!htdb) {
		if (process.env.NODE_ENV === "production") {
			htdb = new HTDB(PATH.join(process.cwd(), ".next/server/chunks"), 0);
		} else {
			const { serverRuntimeConfig } = getConfig();
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
