const MovieModel = require('../models/movies');

module.exports = {
    getAll: (req, res) => {
        MovieModel.find({})
            .then(data => {
                res.json(data);
                console.log(data)
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
                res.status(500).json(error);
            })
    },
    add: async (req, res) => {
        try {
            const savedItem = await new MovieModel(req.body).save();
            res.json(savedItem);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getOne: async (req, res) => {
        try {
            const item = await MovieModel.findById(req.params.id);
            res.json(item);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            await MovieModel.deleteOne({ _id: req.params.id });
            res.json({ success: true });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    update: async (req, res) => {
        try {
            const item = await MovieModel.findByIdAndUpdate(req.params.id,
                { $set: req.body },
                {
                    new: true
                }
            );
            res.json(item);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
