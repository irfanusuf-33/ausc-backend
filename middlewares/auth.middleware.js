import jwt from 'jsonwebtoken';

export const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookies?.ausc_session;

        if (!token) {
            return res.status(401).json({
                success: false,
                error: 'Access denied. No token provided.'
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Error in isLoggedIn middleware:', error);
        return res.status(403).json({
            success: false,
            error: 'Invalid or expired token.'
        });
    }
};

export const hasAccess = (requiredPolicy) => {
    return async (req, res, next) => {
        try {
            const policies = req.user?.policies;

            if (!policies || (!policies.includes(requiredPolicy) && !policies.includes('fullAccess'))) {
                return res.status(403).json({
                    success: false,
                    error: 'Access denied. Insufficient permissions.'
                });
            }

            next();
        } catch (error) {
            console.error('Error in hasAccess middleware:', error);
            return res.status(500).json({
                success: false,
                error: 'Internal server error during authorization.'
            });
        }
    };
};