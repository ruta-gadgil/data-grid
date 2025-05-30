import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Sample users
const users = [
  { id: 1, name: 'Audrey Howell', email: 'audrey@example.com', avatar: 'https://picsum.photos/20' },
  { id: 2, name: 'Max Ratnikov', email: 'max@example.com', avatar: 'https://picsum.photos/20' },
  { id: 3, name: 'Michael Antonov', email: 'michael@example.com', avatar: 'https://picsum.photos/20' },
  { id: 4, name: 'Garegin Papoian', email: 'garegin@example.com', avatar: 'https://picsum.photos/20' },
  { id: 5, name: 'Dilpreet Singh', email: 'dilpreet@example.com', avatar: 'https://picsum.photos/20' },
];

// column types can be one of (link, tag, num, text, user)
// tableData = {
//    columns: [{colId: '', name: '', type: ''}, {colId: '', name: '', type: ''}, {colId: '', name: '', type: ''}, ...]
//    data: [{}, {}, {}, ...]
// }

// Sample Table 1
// const tableData = {columns: [
//   {colId: 0, name: 'ID', type: 'link'}, 
//   {colId: 1, name: 'PlasmID', type: 'tag'},
//   {colId: 2, name: 'TextColumn', type: 'text'},
//   {colId: 3, name: 'Volume', type: 'num'},
//   {colId: 4, name: 'Asignee', type: 'user'},
// ], data: [
//   ['https://developer.mozilla.org/en-US/', 'Tag1', 'abc', 1, [users[0]]],
//   ['https://developer.mozilla.org/en-US/', 'Tag2', 'def', 2, [users[1], users[2], users[0]]],
//   ['https://developer.mozilla.org/en-US/', 'Tag3', 'ghi', 3, [users[2], users[3], users[0]]],
//   ['https://developer.mozilla.org/en-US/', 'Tag4', 'jkl', 4, [users[3], users[4], users[0], users[1]]],
//   ['https://developer.mozilla.org/en-US/', 'Tag5', 'mno', 5, []],
//   ['https://developer.mozilla.org/en-US/', 'Tag6', 'pqr', 6, [users[0]]],
// ]}
// Sample Table 2
const tableData = {
  columns: [
    {colId: 0, name: 'Asignee', type: 'user'},
    {colId: 1, name: 'Text', type: 'text'},
    {colId: 2, name: 'Num', type: 'num'}
  ],
  data: [
    [[users[0]], '12', 12],
    [[users[0], users[1]], '12', 12],
    [[users[0], users[1], users[2], users[3]], '12', 12],
    [[users[0], users[1]], '12', 12],
  ]
}

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/tableData', (req, res) => {
  res.json(tableData);
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});