const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');




const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {

	users: [
		

		{
			username: 'czaradmin',
			password: 'f0rm4tC:',
			joined: new Date()
		}
	]
}


const ticketDatabase = {

	tickets: [
		

		{
			date: new Date(),
			ticket_submitted: 'no',
			first_name: 'London',
			last_name: 'Reed',
			email: 'lreed@czarnowski.com',
			issue: 'wifi not working'
		}
	]
}	

app.get('/', (req, res)=>{
	res.send(database.users);
})

app.post('/signin', (req, res) => {
	if(req.body.username === database.users[0].username && 
		req.body.password === database.users[0].password) {
		res.json('success');
	} else {
		res.status(400).json('wrong username or password');
	}
	
	res.json('signing in');
})


app.post('/register', (req, res) => {
	const {ticket_submitted, first_name, last_name, email, issue} = req.body;
	ticketDatabase.tickets.push({
			date: new Date(),
			ticket_submitted: ticket_submitted,
			first_name: first_name,
			last_name: last_name ,
			email: email,
			issue: issue
	})
	res.json(ticketDatabase.tickets[ticketDatabase.tickets.length-1]);
})



app.listen(3000, ()=>{
	console.log('app is running on port 3000')
});