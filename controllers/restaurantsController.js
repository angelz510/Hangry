const db = require('../models');

const index = (req, res) => {
    db.Restaurant.find({}, (err, allRestaurants) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

        res.json(allRestaurants);
    });
}

const show = (req, res) => {
    db.Restaurant.findById(req.params.id, (err, foundRestaurant) => { 
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

        res.json(foundRestaurant);
    });
}

const create = (req, res) => {
    db.Restaurant.create(req.body, (err, newRestaurant) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
        
        res.json(newRestaurant);
    });
}


module.exports = {
    index: index,
    show: show,
    create: create,
}