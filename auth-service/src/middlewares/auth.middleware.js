import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export const verifyJwt = (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token manquant ou invalide.' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, env.jwt.secret);
    req.user = decoded; // stocke l’utilisateur pour les contrôleurs
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token invalide ou expiré.' });
  }
};
