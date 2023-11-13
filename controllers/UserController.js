
const { selectUsers, insertUsers, updateUsers, deleteUsers } = require("../services/UserService");

const index = async (req, res) => {
    try {
        const data = await selectUsers();

        return res.json({
            data: data,
            code: 200
        });
    } catch (error) {
        console.error("Error in index controller:", error);
        return res.status(500).json({
            error: "Internal Server Error",
            code: 500
        });
    } 0
}

const show = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await selectUsers({ where: { id: id } });

        if (data.length === 0) {
            return res.status(404).send({
                message: `Data user with id ${id} not found`,
                code: 404
            }); 
        }

        return res.status(200).send({
            data: data,
            code: 200
        });

    } catch (error) {
        console.error("Error in show controller:", error);
    }
}

const store = async (req, res) => {
    try {
        const usersData = req.body;

        const data = await insertUsers(usersData);

        return res.json({
            message: 'Data user has been created',
            data: data,
            code: 201
        });
    } catch (error) {
        console.error("Error in store controller:", error);
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const request = req.body;

        const data = await updateUsers(id, request);

        if (!data) {
            return res.status(404).json({
                status: 'FAILED',
                data: `data user with id ${id} not found`,
                code: 404
            });
        }

        return res.json({
            message: 'Data user has been updated',
            data: data,
            code: 200
        });
    } catch (error) {
        console.error("Error in update controller:", error);
    }
}

const destroy = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await deleteUsers(id);

        if (!data) {
            return res.status(404).json({
                status: 'FAILED',
                data: `data user with id ${id} not found`,
                code: 404
            });
        }

        return res.json({
            message: 'Data user has been deleted',
            data: data,
            code: 200
        });
    } catch (error) {
        console.error("Error in destroy controller:", error);
    }
}

module.exports = ({ index, store, show, update, destroy });
