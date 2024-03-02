const mongoose = require('mongoose');


const MONGO_URI = "mongodb+srv://kunalrmedhane:kunal1211@cluster0.fyz4btg.mongodb.net/FullStackMongoDatabase?retryWrites=true&w=majority";
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log(`Mongo DB is connected!!! ${conn.connection.host} `);
	} catch (error) {
		console.error('Mongo DB connection Failed', error);
		process.exit(1);
	}
}

module.exports = connectDB;