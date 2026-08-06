import express from 'express';
import { login, addAccount, editAccount, deleteAccount, viewAllAccounts } from '../controllers/user.controller.js';
import { isLoggedIn, hasAccess } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/login', login);
router.post('/users/add', isLoggedIn, hasAccess('fullAccess'), addAccount);
router.put('/users/edit/:id', isLoggedIn, hasAccess('fullAccess'), editAccount);
router.delete('/users/delete/:id', isLoggedIn, hasAccess('fullAccess'), deleteAccount);
router.get('/users/all', isLoggedIn, hasAccess('readAccess'), viewAllAccounts);

export default router;