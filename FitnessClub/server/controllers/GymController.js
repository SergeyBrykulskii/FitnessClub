import Gym from '../models/Gym.js';

export const getAll = (req, res) => {
    Gym.find()
        .then(gyms => {
            res.json(gyms);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Что-то пошло не так',
            });
        });
};

export const getById = (req, res) => {
    Gym.findById(req.params.id)
        .then(gym => {
            res.json(gym);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Что-то пошло не так',
            });
        });
};

export const create = async (req, res) => {
    try {
        const gym = new Gym(req.body);

        await gym.save();   

        res.json(gym);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Что-то пошло не так',
        });
    }
}

export const update = (req, res) => {
    const postId = req.params.id;
    const updateFields = {
        name: req.body.name,
        address: req.body.address,
    };

    Gym.findByIdAndUpdate(postId, updateFields)
        .then(() => {
            res.json({
                success: true,
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Что-то пошло не так',
            });
        });
};

export const deleteById = (req, res) => {
    const postId = req.params.id;

    Gym.deleteOne({ _id: postId })
        .then(result => {
            if (result.deletedCount === 0) {
                return res.status(404).json({
                    message: 'Не найдено',
                });
            }

            return res.json({
                success: true,
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Что-то пошло не так',
            });
        });
};