const Post = require('../models/Post');
const Comment = require("../models/Comment");
const Token = require("../models/Token");
const User = require("../models/User");

describe('API models', () => {
    beforeAll(() => {
        console.log('Tests starting')
    })

    afterAll((done) => {
        console.log('Tests completed')
        done()
    
    })
    // Post Model
    it('Post has getAll function exists', () => {
        expect(Post).toHaveProperty('getAll')
    })

    it("Post has getAllAnnouncements function exists", () => {
        expect(Post).toHaveProperty('getAllAnnouncements');
    });

    it("Post has getAllEvents function exists", () => {
        expect(Post).toHaveProperty("getAllEvents");
    });
    
    it("Post has getAllVoluntary function exists", () => {
        expect(Post).toHaveProperty("getAllVoluntary");
    });
    
    it("Post has getAllClubs function exists", () => {
        expect(Post).toHaveProperty("getAllClubs");
    });

    it("Post has getAllClubs function exists", () => {
        expect(Post).toHaveProperty("getAllClubs");
    });

    it("Post has show function exists", () => {
        expect(Post).toHaveProperty("show");
    });

    // Comment Model

    it('Comment has getByPostId exists', () => {
        expect(Post).toHaveProperty("getByPostId");
    });
})
