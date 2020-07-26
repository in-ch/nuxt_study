const express = require("express");
const cors = require('cors');   // 허용해 주기 위해.. 요청을 .. 
const bcrypt = require('bcrypt');

const db = require("./models"); // index.js의 db 변수 불러온 것이다.
const app = express();

db.sequelize.sync(); // 서버가 실행되는 것이다.

app.use(cors('http://localhost:3000'));
app.use(express.json()); // 기본적으로 app.js는 json형식의 데이터를 받지 못하므로 이렇게 선언해야 json형식의 데이터를 받을 수 있다.
app.use(express.urlencoded({ extended: false })); // app.js에 전송되는 데이터가 form 형식을 경우 app.js에서 받을 수 있는 데이터로 바꿔줌.

app.get("/", (req, res) => {
  res.send("안녕 시퀄라이즈");
});

app.post("/user", async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 12); //bcrypt를 통해서 암호화 
    
    const newUser = await db.User.create({
        email: req.body.email,
        password: hash,
        nickname: req.body.nickname,
    });
    res.status(201).json(newUser); // 성공적으로 생성됨이라고 알려주는 건데, 사실 생략은 가능하다. 이런 것을 HTTP STATUS CODE 라고 한다. -> 검색하면 알게 됨, 200은 성공이고 201은 성공적으로 생성했다 라는 뜻.
  } catch (err) {
    console.log(err);
    next(err);
  }
});

app.listen(3085, () => {
  console.log(`백엔드 ${3085}번 포트에서 작동 중.`);
});
