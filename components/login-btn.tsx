'use client';
import FormUser from '@/app/utils/user-autentication';
import { signIn } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function Component() {
  return (
    <div className="flex justify-center items-center h-[80vh] m-auto">
      <div className="border-2 border-gray-400 rounded-lg p-7 ">
        <h1 className="text-xl font-sans font-bold text-center">Login</h1>
        <FormUser />
        <div className="text-center">
          <p className="mt-2">or</p>
          <div className="mt-1 flex justify-center items-center">
            <button onClick={() => signIn('github')}>
              <FaGithub className="w-7 h-7" />
            </button>
            <button onClick={() => signIn('google')}>
              <FcGoogle className="w-7 h-7 text-red-500 ml-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
