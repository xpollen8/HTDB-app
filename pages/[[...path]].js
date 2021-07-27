import getConfig from 'next/config'
import Head from 'next/head'
import HTDB from 'HTDBjs';

const { serverRuntimeConfig } = getConfig()

let htdb;

/*
export async function getServerSideProps({ query: { path = [] } = {} }) {
	if (!htdb) {
		htdb = new HTDB(process.cwd(), 1);
	}

	return {
		props: { body: await htdb.render(path.join('/')) }
	}
}
*/

export async function getStaticProps({ params: { path = [] } = {} }) {
	console.log("ARGS", path, serverRuntimeConfig.PROJECT_ROOT);
	//https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
	if (!htdb) {
		htdb = new HTDB(serverRuntimeConfig.PROJECT_ROOT, 1);
	}

	return {
		props: { body: await htdb.render(path.join('/')) }
	}
}

export async function getStaticPaths() {
	return {
		paths: [
			//{ params: { path: [ 'site', 'buh' ] } } // See the "paths" section below
			{ params: { path: [ 'site' ] } } // See the "paths" section below
		],
		fallback: true
	};
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
