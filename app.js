"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-check
var Joi = require('joi');
// const express = require('express');
// import * as express from "express";
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(express_1.default.json());
var courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];
console.log(typeof courses);
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/api/courses', function (req, res) {
    res.send(courses);
});
app.get('/api/courses/:id', function (req, res) {
    var course = courses.find(function (c) { return c.id === parseInt(req.params.id); });
    if (!course)
        return res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});
app.post('/api/courses', function (req, res) {
    var error = validateCourse(req.body).error;
    if (error)
        return res.status(400).send(error.details[0].message);
    var course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});
app.put('/api/courses/:id', function (req, res) {
    var course = courses.find(function (c) { return c.id === parseInt(req.params.id); });
    if (!course)
        return res.status(404).send('The course with the given ID was not found.');
    var error = validateCourse(req.body).error;
    if (error)
        return res.status(400).send(error.details[0].message);
    course.name = req.body.name;
    res.send(course);
});
app.delete('/api/courses/:id', function (req, res) {
    var course = courses.find(function (c) { return c.id === parseInt(req.params.id); });
    if (!course)
        return res.status(404).send('The course with the given ID was not found.');
    var index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});
function validateCourse(course) {
    var schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log("( \u0361\u00B0 \u035C\u0296 \u0361\u00B0) Listening on port " + port + " \u00AF_(\u30C4)_/\u00AF"); });
console.log("Cheaper, Better, Faster. You can only pick two.");
