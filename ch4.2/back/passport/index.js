const passport = require('passport');

module.exports = () => {
    
    passport.serializeUser((user, done) => { // 사용자 정보를 서버에 저장하는데, 최대한 가볍게 저장하기 위해서 딱 사용자의 아이디만 메모리에 저장할 것이다. 서버의 메모리 부담을 덜기 위해
        return done(null, user.id);
    });

    passport.deserializeUser(() => {

    });
};