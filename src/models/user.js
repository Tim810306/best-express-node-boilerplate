const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: () => uuid()
		},
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},{
      indexes: [
			  {
				  unique: true,
				  fields: ['email']
			  }
		]
    }
  });

  User.associate = models => {
    User.hasMany(models.Message, { onDelete: 'CASCADE' });
  };

  User.findByLogin = async login => {
    let user = await User.findOne({
      where: { username: login },
    });

    if (!user) {
      user = await User.findOne({
        where: { email: login },
      });
    }

    return user;
  };

  return User;
};

export default user;
