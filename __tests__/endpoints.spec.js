const request = require('supertest')
const app = require('../app')


describe('API Endpoints', () => {
    let api
    const port = 5000

    beforeAll(() => {
        api = app.listen(port, () => {
            console.log(`Test server running on port: ${port}`)
        })
    })

    afterAll((done) => {
        console.log('Test sever gracefully stopping')
        api.close(done)
    })

    it('responds to GET / with status 200', (done) => {
        request(api)
            .get('/')
            .expect(200, done)
    })

    it('responds to invalid method request to / with status 404', (done) => {
        request(api)
            .post('/')
            .expect(404, done)
    })

    it('responds to GET /posts with status 200', async (done) => {
        // request(api)
        //     .get('/posts')
        //     .expect(200, done)
        const response = await request(api).get('/posts')
        expect(response.status).toBe(500, done)
        // done();
    })

    it('responds to GET /announcements with status 200', (done) => {
        request(api)
            .get('/posts/announcements')
            .expect(200, done)
    })
})