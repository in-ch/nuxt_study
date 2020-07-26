module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING(40), // 문자열이고 30자 이내여야 한다.
        allowNull: false,
        unique: true, // 중복 금지
      },
      nickname: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci", // 여기는 이 db 세팅값 넣는 것이다.
    }
  );
  User.associate = (db) => {}; // 테이블 순서값 고정할 때 쓰는 거임
  return User;
};
