import Membership from '../models/Membership.js';

export const getAll = (req, res) => {
    Membership.find()
        .populate('gym')
        .then(memberships => {
            res.json(memberships);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Что-то пошло не так',
            });
        });
};

export const getById = (req, res) => {
    Membership.findById(req.params.id)
        .populate('gym')
        .then(membership => {
            res.json(membership);
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
        const membership = new Membership(req.body);

        await membership.save();

        res.json(membership);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Что-то пошло не так',
        });
    }
};

export const update = (req, res) => {
    const membershipId = req.params.id;
    const updateFields = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        gym: req.body.gym,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
    };

    Membership.findByIdAndUpdate(membershipId, updateFields)
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
    const membershipId = req.params.id;

    Membership.deleteOne({ _id: membershipId })
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