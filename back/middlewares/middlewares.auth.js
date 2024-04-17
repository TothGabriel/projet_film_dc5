const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  if (req.path === '/connexion') {
    return next();
  }

  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Accès non autorisé' });
  }

  try {
    const decodedToken = jwt.verify(token, 'S7CHZTOAHX5YiYZsmbMjClgjNICu5f2Z');
    req.user = decodedToken;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: 'Token expiré' });
    }
    res.status(401).json({ message: 'Token invalide', error: error.message });
  }
};

module.exports = authMiddleware;