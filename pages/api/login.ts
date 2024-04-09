import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { serialize } from 'cookie';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { email, password } = req.body;
        const response = await axios.post(`${process.env.BACKEND_URL}/accounts/api/token/`,
            { email, password },
            { withCredentials: true }
        );

        // Assuming `user_permission` and `access_token` are part of the response for example
        const { user_permission, access_token } = response.data;

        // Serialize the currentUser data into a cookie string
        const currentUserCookie = serialize('currentUser', JSON.stringify({ user_permission }), {
            httpOnly: true, // Make the cookie inaccessible to JavaScript
            path: '/', // Cookie is accessible on all pages
            sameSite: 'strict', // Strictly same-site
            // secure: true, // Uncomment this in production to send the cookie over HTTPS only
        });

        // Set the currentUser cookie along with any cookies from the backend
        const backendCookies = response.headers['set-cookie'] || [];
        res.setHeader('Set-Cookie', [...backendCookies, currentUserCookie]);

        res.status(response.status).json(response.data);
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            const cookies = error.response.headers['set-cookie'];
            if(cookies) {
                res.setHeader('Set-Cookie', cookies);
            }
            res.status(error.response.status).json({ message: error.response.data.detail || 'An unknown error occurred' });
        } else {
            console.error('An unexpected error occurred:', error);
            res.status(500).json({ message: 'An unknown error occurred'});
        }
    }
}
