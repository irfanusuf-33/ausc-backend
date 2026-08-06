import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from "../lib/prisma.lib.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, error: 'Email and password are required' });
        }

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ success: false, error: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, error: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email, policies: user.policies },
            process.env.JWT_SECRET || 'your_jwt_secret_93827324kjdsf',
            { expiresIn: '2d' }
        );

        res.cookie('ausc_session', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 2 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                id: user.id,
                email: user.email,
                policies: user.policies
            }
        });
    } catch (error) {
        console.error('Error in login controller:', error);
        return res.status(500).json({ success: false, error: 'An error occurred during login' });
    }
};

export const addAccount = async (req, res) => {
    try {
        const { email, password, policies } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, error: 'Email and password are required' });
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ success: false, error: 'User with this email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                policies: policies || []
            }
        });

        return res.status(201).json({
            success: true,
            message: 'Account created successfully',
            user: {
                id: newUser.id,
                email: newUser.email,
                policies: newUser.policies
            }
        });
    } catch (error) {
        console.error('Error in addAccount controller:', error);
        return res.status(500).json({ success: false, error: 'An error occurred while creating the account' });
    }
};

export const editAccount = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, password, policies } = req.body;

        const user = await prisma.user.findUnique({ where: { id } });
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        const updateData = {};
        if (email) updateData.email = email;
        if (policies) updateData.policies = policies;
        if (password) {
            updateData.password = await bcrypt.hash(password, 10);
        }

        const updatedUser = await prisma.user.update({
            where: { id },
            data: updateData
        });

        return res.status(200).json({
            success: true,
            message: 'Account updated successfully',
            user: {
                id: updatedUser.id,
                email: updatedUser.email,
                policies: updatedUser.policies
            }
        });
    } catch (error) {
        console.error('Error in editAccount controller:', error);
        return res.status(500).json({ success: false, error: 'An error occurred while updating the account' });
    }
};

export const deleteAccount = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await prisma.user.findUnique({ where: { id } });
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        await prisma.user.delete({ where: { id } });

        return res.status(200).json({
            success: true,
            message: 'Account deleted successfully'
        });
    } catch (error) {
        console.error('Error in deleteAccount controller:', error);
        return res.status(500).json({ success: false, error: 'An error occurred while deleting the account' });
    }
};

export const viewAllAccounts = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                policies: true,
                createdAt: true,
                updatedAt: true
            }
        });

        return res.status(200).json({
            success: true,
            count: users.length,
            users
        });
    } catch (error) {
        console.error('Error in viewAllAccounts controller:', error);
        return res.status(500).json({
            success: false,
            error: 'An error occurred while fetching accounts'
        });
    }
};