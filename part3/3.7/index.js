const express = require('express');
const app = express();

app.use(express.json());

let persons = [
  { id: 1, name: "Arto Hellas", number: "040-123456" },
  { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
  { id: 3, name: "Dan Abramov", number: "12-43-234345" },
  { id: 4, name: "Mary Poppendieck", number: "39-23-6423122" }
];

// Middleware для логирования
const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  console.log('Body:', req.body);
  console.log('---');
  next();
};

app.use(requestLogger);

app.get('/api/persons', (req, res) => res.json(persons));

app.get('/info', (req, res) => {
  const count = persons.length;
  const date = new Date();
  res.send(`<p>Phonebook has info for ${count} people</p><p>${date}</p>`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
