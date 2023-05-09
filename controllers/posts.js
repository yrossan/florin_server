const Post = require('../models/Post');

async function index (req, res) {
    try {
        const posts = await Post.getAll();
        res.json(posts);
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
};

async function getServices(req, res) {
    try {
        const services = await Post.getAllServices()
        res.status(200).json(services)
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function getEvents(req, res) {
    try {
        const events = await Post.getAllEvents()
        res.status(200).json(events)
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function getJobs(req, res) {
    try {
        const jobs = await Post.getAllJobs()
        res.status(200).json(jobs)
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function getClubs(req, res) {
    try {
        const clubs = await Post.getAllClubs()
        res.status(200).json(clubs)
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function getVoluntary(req, res) {
    try {
        const jobs = await Post.getAllVoluntary()
        res.status(200).json(jobs)
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function getAnnouncements(req, res) {
    try {
        const announcements = await Post.getAllAnnouncements()
        res.status(200).json(announcements)
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function create (req, res) {
    try {
        const data = req.body;
        const result = await Post.create(data);
        res.status(201).send(result);
    } catch (err) {
        res.status(400).json({"error": err.message})
    }
};

async function show (req, res) {
    try {
        const id = parseInt(req.params.id);
        const post = await Post.getOneById(id);
        res.json(post);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
};

async function destroy (req, res) {
    try {
        const id = parseInt(req.params.id);
        const post = await Post.getOneById(id);
        const result = await post.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
};

module.exports = {
    index,
    create,
    show,
    destroy,
    getServices, 
    getEvents,
    getJobs,
    getVoluntary,
    getAnnouncements,
    getClubs
}