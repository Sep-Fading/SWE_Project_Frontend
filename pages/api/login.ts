// This page will handle 
// login requests with the backend 

import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { email, password } = req.body;
        const response = await axios.post(`${process.env.BACKEND_URL}/accounts/api/token/`,
            {
                email,
                password,
            },
            {
                withCredentials: true, // Send cookies with request if backend relies on them.
            }
        );

        // Extract cookies from the Axios response and forward them to the client.
        const cookies = response.headers['set-cookie'];
        if (cookies) {
            res.setHeader('Set-Cookie', cookies);
        }

        // Fowrarding the backend response directly
        res.status(response.status).json(response.data);
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {

            // Extract cookies from the error response and forward them.
            const cookies = error.response.headers['set-cookie'];
            if(cookies) {
                res.setHeader('Set-Cookie', cookies);
            }
            res.status(error.response.status).json({message:error.response.data.detail ||
                'An unkown error occurred' });
        }
        else {
            // Handling non-axios errors.
            console.error('An unexpected error occured:', error);
            res.status(500).json({ message: 'An unknown error occurred'});
        }
    }
}

