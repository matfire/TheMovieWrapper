import API from '../../index';

let client: API;

// eslint-disable-next-line no-undef
beforeAll(() => {
  client = new API(process.env.TMDB_KEY!, true);
});

// eslint-disable-next-line no-undef
test('get latest movie', async () => {
	const clientRes = await client.movies.getLatest()

	expect(clientRes.id).toBeDefined()
})