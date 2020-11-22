module.exports = (sequelize, Sequelize = require('sequelize')) => {
    const Student = sequelize.define('student',{
        rollNo: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        fees: {
            type: Sequelize.STRING,
        },
        subjects: {
            type: Sequelize.STRING,
        },
        grades: {
            type: Sequelize.STRING,
        },
        scholarship: {
            type: Sequelize.STRING,
        },

    },
    {
        tableName: 'student_details'
    }
    )
    return Student;
}
