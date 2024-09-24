const mongoose = require('mongoose');

const seniorHodSchema = new mongoose.Schema({
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
        default: 'Senior HOD',
    },
    departmentName: {
        type: String,
        required: true,
    },
    teamSize: {
        type: Number,
        default: 0, 
    },
    hodsUnder: [{
        type: mongoose.Schema.ObjectId,
        ref: 'HOD', 
    }],
});

const SeniorHOD = mongoose.model('SeniorHOD', seniorHodSchema);

module.exports = SeniorHOD;
