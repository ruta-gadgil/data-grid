import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Sample data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', avatar: 'https://picsum.photos/20' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', avatar: 'https://picsum.photos/20' },
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
  {colId: 4, name: 'Asignee', type: 'user'},
], data: [
  ['https://developer.mozilla.org/en-US/', 'Tag1', 'abc', 1, users],
  ['https://developer.mozilla.org/en-US/', 'Tag2', 'def', 2, users],
  ['https://developer.mozilla.org/en-US/', 'Tag3', 'ghi', 3, users],
  ['https://developer.mozilla.org/en-US/', 'Tag4', 'jkl', 4, users],
  ['https://developer.mozilla.org/en-US/', 'Tag5', 'mno', 5, users],
  ['https://developer.mozilla.org/en-US/', 'Tag6', 'pqr', 6, users],
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