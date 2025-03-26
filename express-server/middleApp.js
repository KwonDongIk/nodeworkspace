const express = require('express');
const app = express();

// 미들웨어 등록
const session = require('express-session');
const cors = require('cors');
let sessionSetting = session({
  secret : '$3@$10*!%499^594@&(#27#',
  resave : false,
  saveUninitialized : true,
  cookie : {
    httpOnly : true,
    secure : false,
    maxAge : 60000
  }
});

app.use(sessionSetting);

app.use(express.json());

// 모든 origin과 모든 요청에 응답
// app.use(cors());

const corsOption = {
  origin : 'http://192.168.0.38:5500',
  optionsSuccessStatus : 200
}

app.use(cors(corsOption));

app.listen(3000, () => {
  console.log('http://localhost:3000');
});

app.post('/login', (req, res) => {
  const {id, pwd} = req.body; // {"id" : "user02", "pwd" : "1280"}
  req.session.user = id;
  req.session.pwd = pwd;
  req.session.save(function(err){
    if(err) throw err;
    //res.redirect('/');
    res.send(req.session);
  })
});

app.get('/', (req, res) => {
  res.send(req.session.user);
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
})