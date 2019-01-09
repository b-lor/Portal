const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
.then(() => console.log('Connecting to database successful'))
.catch(err => console.error('Could not connect to Mongo DB', err));
mongoose.set('useCreateIndex', true);

require('./user.model');