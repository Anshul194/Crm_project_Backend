import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
        unique: true, 
    },
    department_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Department',
        required: true, 
    },
    projectManager: {
        type: mongoose.Schema.ObjectId,
        ref: 'Employee', 
        required: true,
    },
    teamMembers: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Employee', 
    }],
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
    },
    budget: {
        type: Number,
        default: 0, 
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed', 'On Hold'],
        default: 'Not Started',
    },
    description: {
        type: String,
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium',
    },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
