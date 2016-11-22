import path from 'path';
import {Server} from 'http';
import Express from 'express';
import * as fs from 'fs';
import JSONStream from 'jsonstream';

const app = new Express();
const server = new Server(app);

app.use('/js', Express.static(path.join(__dirname, 'static', 'js')));
app.use('/data', Express.static(path.join(__dirname, 'data')));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

// app.post('/api/getData', (req,res) => {
//   console.log(req);
// })

app.post('/api/getData', (req,res) =>{
  var stream = fs.createReadStream(path.join(__dirname, 'data', 'input.json'));
  stream.pipe(res);
})

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

server.listen(port, err => {
  if(err){return console.error(err);}

  console.info(`Server now running on port ${port}`)
});
