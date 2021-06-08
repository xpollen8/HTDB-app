import Head from 'next/head'

export async function getServerSideProps({ query = {} }) {
	const id = query.id || 0;
	const { results, errors } = await (require('../lib/fetch_data'))(`/api/${id}`);
	return {
		props: { id, ...results }
	}
}

const App = ({ id, body }) => (
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
