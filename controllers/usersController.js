const db = require('../models');

const index = (req, res) => {
    db.User.find({}, (err, allUsers) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

        res.json(allUsers);
    });
}

const show = (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => { 
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

        res.json(foundUser);
    });
}
const update= (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => { 
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

        const foundPost= foundUser.post.id(req.params.id);
        if (!foundPost){
            return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
        }
        foundPost.body = req.body.body;
        foundUser.save((err, savedUser)=>{
            if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
        })
        res.json(savedUser);
    });
}


const create = (req, res) => {
    db.User.create(req.body, (err, newUser) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
        
        res.json(newUser);
    });
}
const destroy = (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (err, deletedUser)=> {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

        res.json(deletedUser);
    })
}

module.exports = {
    index: index,
    show: show,
    update:update,
    create: create,
    destroy: destroy,
}