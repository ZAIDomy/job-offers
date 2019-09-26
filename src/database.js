const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jobs', {
    useNewUrlParser: true
})
    .then(db => console.log('Db is connected'))
    .catch(err => console.log(err));