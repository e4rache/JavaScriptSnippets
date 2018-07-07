//@ts-check
const Joi = require('joi');
// const express = require('express');


// import * as express from "express";

import express from "express";

const app = express();

app.use(express.json());

// const courses = [
// 	{ id: 1, name: 'course1'},
// 	{ id: 2, name: 'course2'},
// 	{ id: 3, name: 'course3'}
// ];

type Course = {
	id : number,
	name: string
}

const courses : Course[] = [
	{ id: 1, name: 'course1'},
	{ id: 2, name: 'course2'},
	{ id: 3, name: 'course3'}
];

courses.find();

console.log(typeof courses);

app.get('/',(req , res) =>{
	res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');
	res.send(course);
});

app.post('/api/courses', (req, res) =>{
	const {error} = validateCourse(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const course = {
		id: courses.length +1,
		name: req.body.name
	};
	courses.push(course);
	res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');

	const {error} = validateCourse(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	course.name = req.body.name;
	res.send(course);

});

app.delete('/api/courses/:id',(req , res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');

	const index = courses.indexOf(course);
	courses.splice(index,1);

	res.send(course);
});

function validateCourse(course : Course){
	const schema = {
		name: Joi.string().min(3).required()
	};
	return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`( ͡° ͜ʖ ͡°) Listening on port ${port} ¯\_(ツ)_/¯`));
console.log("Cheaper, Better, Faster. You can only pick two.");