require('dotenv').config();

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cougarexpress';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

module.exports = {
    mongoURI,
    options
};