const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const db = require('../models');
const { noExtendLeft } = require('sequelize/types/lib/operators');

module.exports = () => {
    passport.use(new LocalStrategy({ // 검사하는 게 이곳에서 이루어짐 
        usernameField: 'email',  // req.body.email
        passwordField: 'password', // req.body.password
    }, async (userId, password, done) => {
        // 검사는 이곳 
        
        try {
            const exUser = await db.User.findOne({ 
                where: { email } 
            });

            if(!exUser) {
                return done(null, false, {reason: '존재하지 않는 상품입니다.' });
            }

            const result = await bycrpt.compare(password, exUser.password);  // 비밀 번호가 맞는 지 체크, 트루가 성공 펄스가 실패

            if(result) {
                return done(null, exUser);
            } else{
                return done(null, false, { reason: '비밀번호가 틀립니다.'});
            }
        } catch(err){
            return next(err);
        }

    }));
};