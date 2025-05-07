import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Sample data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

// column types can be one of (link, tag, number, string, asignee)
// tableData = {
//    columns: [{colId: '', name: '', type: ''}, {colId: '', name: '', type: ''}, {colId: '', name: '', type: ''}, ...]
//    data: [{}, {}, {}, ...]
// }

const tableData = {columns: [
  {colId: 0, name: 'ID', type: 'link'}, 
  {colId: 1, name: 'PlasmID', type: 'tag'},
  {colId: 2, name: 'TextColumn', type: 'text'},
  {colId: 3, name: 'Volume', type: 'num'},
  // {name: 'Height', type: 'num'},
  // {name: 'Asignee', type: 'str'},
], data: [
  // {ID: 'https://developer.mozilla.org/en-US/', PlasmID: 'Tag1', Volume: 1, Height: 1, Asignee: 'abc'},
  // {ID: 'https://developer.mozilla.org/en-US/', PlasmID: 'Tag2', Volume: 2, Height: 2, Asignee: 'def'},
  // {ID: 'https://developer.mozilla.org/en-US/', PlasmID: 'Tag3', Volume: 3, Height: 2, Asignee: 'ghi'},
  // {ID: 'https://developer.mozilla.org/en-US/', PlasmID: 'Tag4', Volume: 4, Height: 2, Asignee: 'jkl'},
  // {ID: 'https://developer.mozilla.org/en-US/', PlasmID: 'Tag5', Volume: 5, Height: 2, Asignee: 'mno'},
  // {ID: 'https://developer.mozilla.org/en-US/', PlasmID: 'Tag6', Volume: 6, Height: 2, Asignee: 'pqr'},

  // {ID: 'https://developer.mozilla.org/en-US/', PlasmID: 'Tag1', TextColumn: 'abc'},
  // {ID: 'https://developer.mozilla.org/en-US/', PlasmID: 'Tag2', TextColumn: 'def'},
  // {ID: 'https://developer.mozilla.org/en-US/', PlasmID: 'Tag3', TextColumn: 'ghi'},
  // {ID: 'https://developer.mozilla.org/en-US/', PlasmID: 'Tag4', TextColumn: 'jkl'},
  // {ID: 'https://developer.mozilla.org/en-US/', PlasmID: 'Tag5', TextColumn: 'mno'},
  // {ID: 'https://developer.mozilla.org/en-US/', PlasmID: 'Tag6', TextColumn: 'pqr'},
  ['https://developer.mozilla.org/en-US/', 'Tag1', 'abc', 1],
  ['https://developer.mozilla.org/en-US/', 'Tag2', 'def', 2],
  ['https://developer.mozilla.org/en-US/', 'Tag3', 'ghi', 3],
  ['https://developer.mozilla.org/en-US/', 'Tag4', 'jkl', 4],
  ['https://developer.mozilla.org/en-US/', 'Tag5', 'mno', 5],
  ['https://developer.mozilla.org/en-US/', 'Tag6', 'pqr', 6],
]}

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/tableData', (req, res) => {
  res.json(tableData);
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});