const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    Number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


// Custom validation for number
userSchema.path('Number').validate((val) => {
    return /^[0-9]{10}$/.test(val);
}
, 'Invalid number');


// Events
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

mongoose.model('User', userSchema);