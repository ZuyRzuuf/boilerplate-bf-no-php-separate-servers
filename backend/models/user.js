import {userType} from '../constants/enums';

module.exports = (sequelize, DataTypes) => {
    const User =  sequelize.define('user', {
        uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            length: 32,
            allowNull: false,
            unique: true
        },
        type: {
            type: DataTypes.ENUM(userType),
            allowNull: false
        }
    });

    // User.belongsTo('user_type');
    // User.associate = (models) => {
    //     User.belongsTo(models.user_type);
    // };

    return User;
};
