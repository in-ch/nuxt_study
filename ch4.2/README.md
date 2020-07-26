#1 이번 시간에는 드디어 백엔드 코딩에 대해서 배워보자..!

#front 쪽에서 빌더들은 항상 버전이 달라지므로 "sudo npm outdated"를 쳐서 업데이트가 잘 안된 것들 확인하고
#npm update를 눌러 최신 버전으로 다 바꿔준다.
#npm audit fix를 눌르면 버전이 달라져서 이상해진 거 자동으로 고쳐줌 #지속적으로 npm outdated를 쳐서 새로운 거 체킹하고 뭐가 달라졌는지 확인해 보자. #만약에 found 0 vulnerabilities가 0이 아니라 다른 숫자가 나오면 npm audit fix 를 입력하면 자동으로 취약점을 고쳐준다. 대부분 취약점을 고칠 수 있다.

#프론트엔드랑 백엔드가 따로 존재하는 이유
사용자가 많아 지면 따로따로 두는 게 맞음...
프론트가 db접속을 바로하면 보안에 문제가 되므로, 백을 거치는 게 맞다.

req(요청)
GET
header:
body

res(응답)
200 / 400 / 500
header
body: data

GET: 가져오다
POST: 생성하다, 등록하다
PUT: 전체 수정
PATCH: 부분 수정
DELETE: 삭제
OPTIONS: 찔러보기

http:// 는 포트 :80
https:// 는 포트 :443
따라서 app.js에서 app.listen 부분 바꿔야함.

[#4-3 강의]

sequelize를 설치하는 이유는 sql 표현을 통일화하기 위해서
mysql2는 node랑 mysql를 이어주는 드라이버같은 거임 (mysql은 따로 설치해야함)
npm i -D sequelize-cli
npx sequelize init -> 설치 후 여러 폴더들이 생김
npx sequelize init를 한 이유는 글로벌(=npm i -g sequelize init)로 설치하면 package.js에 기록이 안되서 이렇게 하는 거임. 그리고 migrations같은 거 쓸려면 설치해야함
ㄴ 폴더를 만들어줘서 기본 세팅을 해주는 거임
back -> models -> index.js 에서 처음 작성된 코드가 이상하니 바꿔야함... 현재 바꿔있으니깐 나중에 쓸 때는 복붙해서 쓰기..
back -> config -> config.json에서 서버 세팅[비밀번호 등..]을 해줄 수 있음.
npm i -D nodemon 설치하면 기존에는 백에서 기능바뀌면 껏다 다시 껴야됐는데, 이걸 쓰면 그 짓을 안해도 된다.
ㄴpackage.json에서 dev를 "nodemon app.js"로 바꿔야한다.

[#4-4 강의]

app.get(~) 이런식으로 back쪽에서 요청을 처리하는데 만약 게시글을 가져오고 조회수를 하나 늘린다 같이 애매한 경우에는 보통 post를 많이 쓴다고 생각하면 된다.
데이터를 왔다가 갔다리했다는 것을 보기 위해서는 크롬 관리자모드에서 Network를 클릭 -> 하고 Name에서 전송한 데이터 확인하고 Headers 탭에서 맨 아래에 Request Payload를 확인해보면 전송한 데이터가 몬지 확인해 볼 수 있다.
Response는 응답의 body임...

[#4-5 강의]

이제 db에 데이터를 넣어줄 거다.

여기서 mysql 설치가 안되서 막혔었다.

만약 설치를 했는데도 [ Unhandled rejection SequelizeConnectionError: Unknown database 'ollious' ] 라는 메시지를 내놓고 막힌다면

일단 [ npm install -g sequelize-cli ] 해주고 [ sequelize db:create ] 해주면 해결된다.

