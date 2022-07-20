const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.Number = req.body.Number;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate number found.']);
            else
                return next(err);
        }
    }
    );
}

// get all users

module.exports.getAllUsers = (req, res, next) => {
    User.find({}, (err, doc) => {
        if (!err)
            res.send(doc);
        else
            return next(err);
    });
}
