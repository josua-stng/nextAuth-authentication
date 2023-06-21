'use client';
import { signOut } from 'next-auth/react';

export default function SignOut() {
  return (
    <div className="text-center mt-5">
      <button onClick={() => signOut()} className="text-red-500 font-bold">
        SignOut
      </button>
    </div>
  );
}
