const { auth } = require('../config/firebase');

/**
 * Middleware to verify Firebase authentication token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const verifyFirebaseToken = async (req, res, next) => {
  try {
    const idToken = req.headers.authorization?.split('Bearer ')[1];
    
    if (!idToken) {
      return res.status(401).json({ message: 'No token provided' });
    }
    
    try {
      // Verify the Firebase ID token
      const decodedToken = await auth.verifyIdToken(idToken);
      req.user = decodedToken;
      next();
    } catch (error) {
      console.error('Error verifying Firebase token:', error);
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
  } catch (error) {
    console.error('Firebase auth middleware error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  verifyFirebaseToken
};
