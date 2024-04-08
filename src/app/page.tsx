"use client";

import './globals.css';
// Sepehr's Addition - Login Auth
import { useProtectedRoute } from '../useProtectedRoute';

export default function Home() {
  //AUTH
  useProtectedRoute(['EMPLOYEE', 'LINEMANAGER', 'FINANCE']);

  return (
    <div className="flex flex-col items-center gap-4 my-7 md:grid md:grid-cols-2">
      <p>In progress</p>
    </div>
  );
}
