const { User } = require('../models');

const selectUsers = async (condition) => {
    try {
        if (condition) {
        return await User.findAll(condition);
    }

        return await User.findAll();
    } catch (error) {
         throw new Error("Error in selectUsers service:", error);
    }
}

const insertUsers = async (userData) => {
    try {
        return await User.create(userData);
    } catch (error) {
         throw new Error(`Error in insertUsers service: ${error.message}`);
    }
}

const updateUsers = async (id, request) => {
    try {
        // option 1
        // const rule = {
        //     where: { id: id },
        //     returning: true,
        //     individualHooks: true,
        //     plain: true,
        // }

        // return await User.update(request, rule);

        // option 2
        const data = await User.findOne({
            where: { id: id }
        });

        if (!data) {
            return null;
        }

        data.firstName = request.firstName;
        data.lastName = request.lastName;
        data.email = request.email;
        data.save() // save to db

        return data;

        // option 3 tanpa check if ada tidak id nya
        // return await User.update({
        //     firstName: request.firstName,
        //     lastName: request.lastName,
        //     email: request.email,
        // }, {
        //     where: { id: id },
        //     returning: true,
        //     individualHooks: true,
        //     plain: true,
        // });

    } catch (error) {
         throw new Error(`Error in updateUsers service: ${error.message}`);
    }
}

const deleteUsers = async (id) => {
    try {
        const data = await User.findOne({
            where: { id: id }
        });

        if (!data) {
            return null;
        }

        return data.destroy();
    } catch (error) {
         throw new Error(`Error in deleteUsers service: ${error.message}`);
    }
}

module.exports = ({ selectUsers, insertUsers, updateUsers, deleteUsers });
