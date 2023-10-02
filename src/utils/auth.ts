import axios from 'axios';
import { IncomingMessage } from 'http';

export const getUserFromRequest = async (req: IncomingMessage) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return null;
    }

    const token = authHeader.split(' ')[1];

    try {
        const { data: user } = await axios.get(`${process.env.BACKEND_URL}/api/me`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        return user;

    } catch (error) {
        return null;
    }
};