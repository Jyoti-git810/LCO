require('dotenv').config()
const mongoose=require('mongoose')

mongoose.connect(process.env.DATABASE,{
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
}).then(db=>console.log('Connected to database'));

