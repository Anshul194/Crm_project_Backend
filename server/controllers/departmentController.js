import Department from '../model/department.js';

export const getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.find();
        if (!departments || departments.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No departments found',
            });
        }

        return res.status(200).json({
            success: true,
            data: departments,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server Error: Unable to retrieve departments',
            error: error.message,
        });
    }
};
