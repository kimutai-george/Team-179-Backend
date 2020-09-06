module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false,
    },
    image: DataTypes.STRING,
    bios: DataTypes.STRING,
    phoneNumber: DataTypes.NUMBER,
    gender: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    idNumber: DataTypes.NUMBER,
    kraPin: DataTypes.STRING,
    role: DataTypes.ARRAY(DataTypes.STRING),
    certificateOfConduct: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  // eslint-disable-next-line no-unused-vars
  Profile.associate = (models) => {
    // Profile.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return Profile;
};
