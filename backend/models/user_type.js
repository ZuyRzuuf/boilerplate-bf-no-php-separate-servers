module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_type', {
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
        }
    });
};
