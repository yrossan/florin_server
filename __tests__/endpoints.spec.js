const request = require('supertest')
const app = require('../app')

const mockGetAllPostsData = [
  {
    "id": 1,
    "title": "Romeo",
    "content": "Romeo is kinda mean",
    "category": "Services",
    "author_id": 1,
    "post_date": "2023-05-12T00:00:00.000Z"
  },
  {
    "id": 3,
    "title": "Best local cleaning services",
    "content": "Share your experiences and recommendations for local cleaning services in the area.",
    "category": "Services",
    "author_id": 1,
    "post_date": "2023-05-10T00:00:00.000Z"
  },
  {
    "id": 2,
    "title": "Need recommendations for a reliable electrician",
    "content": "Im looking for an electrician to fix some wiring issues in my house. Any suggestions?",
    "category": "Services",
    "author_id": 1,
    "post_date": "2023-05-09T00:00:00.000Z"
  },
  {
    "id": 4,
    "title": "Community event postponed",
    "content": "Due to unforeseen circumstances, the community event scheduled for this weekend has been postponed. Stay tuned for updates on the new date.",
    "category": "Announcements",
    "author_id": 1,
    "post_date": "2023-05-08T00:00:00.000Z"
  },
  {
    "id": 14,
    "title": "First meeting of the hiking club",
    "content": "Get ready for our first hiking club meeting this weekend. Lace up your boots and join us for an adventure!",
    "category": "Clubs",
    "author_id": 1,
    "post_date": "2023-05-07T00:00:00.000Z"
  },
  {
    "id": 5,
    "title": "New community garden initiative",
    "content": "We are starting a new community garden project. Join us in creating a beautiful green space for everyone to enjoy!",
    "category": "Announcements",
    "author_id": 1,
    "post_date": "2023-05-07T00:00:00.000Z"
  },
  {
    "id": 13,
    "title": "Calling all photography enthusiasts",
    "content": "Are you passionate about photography? Join our photography club and share your skills and experiences.",
    "category": "Clubs",
    "author_id": 1,
    "post_date": "2023-05-06T00:00:00.000Z"
  },
  {
    "id": 7,
    "title": "Sports tournament registration now open",
    "content": "Calling all sports enthusiasts! The registration for the community sports tournament is now open. Sign up today!",
    "category": "Events",
    "author_id": 1,
    "post_date": "2023-05-06T00:00:00.000Z"
  },
  {
    "id": 9,
    "title": "Volunteer position: Tutoring program",
    "content": "We are seeking volunteers to join our tutoring program and help local students with their studies. Make a difference in the community!",
    "category": "Jobs",
    "author_id": 1,
    "post_date": "2023-05-06T00:00:00.000Z"
  },
  {
    "id": 11,
    "title": "Volunteer opportunity: Meals on Wheels",
    "content": "Become a volunteer for Meals on Wheels program and make a positive impact by delivering meals to seniors in need.",
    "category": "Voluntary Work",
    "author_id": 1,
    "post_date": "2023-05-06T00:00:00.000Z"
  },
  {
    "id": 15,
    "title": "Art club exhibition",
    "content": "Visit our art club exhibition showcasing the talents of local artists. Support the arts in our community!",
    "category": "Clubs",
    "author_id": 1,
    "post_date": "2023-05-05T00:00:00.000Z"
  },
  {
    "id": 6,
    "title": "Local music festival coming up",
    "content": "Get ready for an amazing music festival happening next month in our community. Dont miss out on the fun!",
    "category": "Events",
    "author_id": 1,
    "post_date": "2023-05-05T00:00:00.000Z"
  },
  {
    "id": 8,
    "title": "Job opportunity: Part-time receptionist",
    "content": "A local business is looking for a part-time receptionist. If you are interested, check out the job details and apply!",
    "category": "Jobs",
    "author_id": 1,
    "post_date": "2023-05-05T00:00:00.000Z"
  },
  {
    "id": 10,
    "title": "Help needed: Community clean-up day",
    "content": "Join us for a community cle+an-up day this weekend. Lets work together to keep our neighborhood clean and beautiful!",
    "category": "Voluntary Work",
    "author_id": 1,
    "post_date": "2023-05-05T00:00:00.000Z"
  },
  {
    "id": 12,
    "title": "Join our book club",
    "content": "Were starting a new book club in the community. If you love reading, come and join us!",
    "category": "Clubs",
    "author_id": 1,
    "post_date": "2023-05-05T00:00:00.000Z"
  }
]

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

    it('responds to GET /posts with status 200', (done) => {
        request(api)
            .get('/')
            .expect(200, done)
    })

    it("GET / should return an  array of posts", async () => {
        // Mock the behavior of the endpoint to return an empty array
        // Assuming the endpoint returns an empty array when no posts are found
        jest.spyOn(api, "get").mockResolvedValue(mockGetAllPostsData);

        const response = await request(app).get("/posts");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("posts");
        expect(response.body.posts).toHaveLength(0);
    });

    it('responds to invalid method request to / with status 404', (done) => {
        request(api)
            .post('/')
            .expect(404, done)
    })

    it('responds to GET /posts with status 200', () => {
        request(api)
        .get('/posts')
        .expect(200)
    })

    it('responds to GET /announcements with status 200', () => {
        request(api)
            .get('/posts/announcements')
            .expect(200)
    })

    it("responds to GET /services with status 200", () => {
        request(api)
            .get("/posts/services")
            .expect(200);
    });

    it("responds to GET /jobs with status 200", () => {
        request(api)
            .get("/posts/jobs")
            .expect(200);
    });

    it("responds to GET /voluntary with status 200", () => {
        request(api)
            .get("/posts/voluntary")
            .expect(200);
    });

    it("responds to GET /events with status 200", () => {
        request(api)
            .get("/posts/events")
            .expect(200);
    });
})