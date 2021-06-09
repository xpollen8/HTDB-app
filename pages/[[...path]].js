import getConfig from 'next/config'
import Head from 'next/head'
import HTDB from 'HTDBjs';

const { serverRuntimeConfig } = getConfig()

let htdb;

export async function getServerSideProps({ query: { path = [] } = {} }) {
	if (!htdb) {
		htdb = new HTDB(serverRuntimeConfig.PROJECT_ROOT, 0);
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
