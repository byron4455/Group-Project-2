module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false
      },
      poster_id: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      content: {
          type: DataTypes.TEXT
      }
  },{
      timestamp: true,
      hooks: {}
  });

  Topic.associate = (models) => {
    Topic.hasOne(models.User, {
        foreignKey: 'poster_id'
    }),
    Topic.hasMany(model.Comment, {
        onDelete: 'cascade'
    })
  }
}