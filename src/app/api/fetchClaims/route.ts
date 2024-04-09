import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { serialize } from 'cookie';

export async function GET(req: NextRequest) {
    if (req.method !== 'GET') return NextResponse.next();

    try {
        const { email, password } = await req.json();
        const backendResponse = await axios.post(`${process.env.BACKEND_URL}/accounts/api/token/`, { email, password }, { withCredentials: true });

        const userRole = backendResponse.data.user_permission;

        const userRoleCookie = serialize('userRole', userRole, {
            httpOnly: true,
            path: '/',
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
        });

        // Creating a response
        let response = NextResponse.json(backendResponse.data);
        response.headers.set('Set-Cookie', userRoleCookie);
        return response;
    } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Error handling for Axios and generic errors
        if (axios.isAxiosError(error) && error.response) {
            return new NextResponse(JSON.stringify({ message: error.response.data.detail || 'An unknown error occurred' }), {
                status: error.response.status,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            return new NextResponse(JSON.stringify({ message: 'An unknown error occurred' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    }
}