import { env } from '../config/env.js';

export const authenticate = (req, res, next) => {
  const serviceToken = req.headers['x-service-token'];

  if (!serviceToken || serviceToken !== env.authServiceToken) {
    return res.status(403).json({
      message: 'Accès interdit : token de service invalide.',
    });
  }

  next();
};