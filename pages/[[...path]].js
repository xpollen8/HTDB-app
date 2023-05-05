import { join } from "path";
import Head from 'next/head'
import HTDB from 'HTDBjs';

let htdb;

export async function getServerSideProps({ params: { path = [] } = {} }) {
	if (!htdb) {
		const rootHTDB = join(process.cwd(), 'pages');
		htdb = new HTDB(rootHTDB, 0);
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
