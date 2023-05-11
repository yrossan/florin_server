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

    it('Post getAll function exists', () => {
        expect(Post).toHaveProperty('getAll')
        // done()
    })
})
