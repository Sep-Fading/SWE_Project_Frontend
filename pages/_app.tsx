import React from 'react';
import { AppProps } from 'next/app';
import { AuthProvider } from '../src/Components/AuthContext'; // Adjust the import path as needed

function MyApp({ Component, pageProps }: AppProps) {
  console.log("APP TSX IS RUNNING");
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;

