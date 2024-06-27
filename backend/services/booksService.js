const BoolModel = require('../models/books');

module.exports = {
    getAll: (req, res) => {
        BoolModel.find({})
            .then(data => {
                res.json(data);
                console.log(data)
            })
            .catch(error => {
                res.status(500).json(error);
            })
    },
    add: async (req, res) => {
        try {
            const savedItem = await new BoolModel(req.body).save();
            res.json(savedItem);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getOne: async (req, res) => {
        try {
            const item = await BoolModel.findById(req.params.id);
            res.json(item);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            await BoolModel.deleteOne({ _id: req.params.id });
            res.json({ success: true });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    update: async (req, res) => {
        try {
            const item = await BoolModel.findByIdAndUpdate(req.params.id,
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
