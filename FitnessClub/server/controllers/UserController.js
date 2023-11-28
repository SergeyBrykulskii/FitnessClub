import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../models/User';

export const registration = async (req, res) => {
    try {
        const password = req.body.password;
        const salt = await bcrypt.genSalt(13);
        const hash = await bcrypt.hash(password, salt);

        const doc = new User({
            name: req.body.name,
            email: req.body.email,
            passwordHash: hash,
        });

        const user = await doc.save();

        const token = jwt.sign(
            {
                _id: user._id,
            },
            'tempsecret$',
            {
                expiresIn: '1d',
            },
        );

        const { passwordHash, ...data } = user._doc();

        res.json({
            data,
            token,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Что-то пошло не так',
        });
    }
};

export const login = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        });

        if (!user) {
            return res.status(404).json({
                message: 'Неверный логин или пароль',
            });
        }

        const isValidPassword = await bcrypt.compare(
            req.body.password,
            user.passwordHash,
        );

        if (!isValidPassword) {
            return res.status(400).json({
                message: 'Неверный логин или пароль',
            });
        }

        const token = jwt.sign(
            {
                _id: user._id,
            },
            'tempsecret$',
            {
                expiresIn: '1d',
            },
        );

        const { passwordHash, ...data } = user._doc();

        res.json({
            data,
            token,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Что-то пошло не так',
        });
    }
};

