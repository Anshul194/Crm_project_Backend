const mongoose = require('mongoose');

const hodSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Employee',
        required: true,
    },
    department_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Department',
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    designation: {
        type: String,
        default: 'HOD',
    },
    departmentName: {
        type: String,
        required: true,
    },
    teamSize: {
        type: Number,
        default: 0, 
    },
    seniorHod_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'SeniorHOD', 
        default: null,     
    },
});

const HOD = mongoose.model('HOD', hodSchema);

module.exports = HOD;
