'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function UserSignUp() {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const isUsernameValue = (event: any) => {
    setUsernameValue(event.target.value);
  };

  const isPassowrdValue = (event: any) => {
    setPasswordValue(event.target.value);
  };

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <form
        className="flex flex-col [&>*]:py-1
       [&>*]:rounded items-center justify-center border-2 border-gray-400 w-max p-5 m-auto rounded-lg "
      >
        <h1 className="text-xl font-bold font-sans">SignUp</h1>
        <input
          type="text"
          placeholder="enter username"
          className="w-max mt-5 pl-2 border-2 border-gray-500"
          onChange={isUsernameValue}
        />
        <input
          type="text"
          placeholder="enter email"
          className="w-max mt-2 pl-2 border-2 border-gray-500"
          onChange={isPassowrdValue}
        />
        <div className="flex flex-col">
          <button
            type="submit"
            className="px-3 py-1.5 mt-4 rounded-md bg-sky-200 hover:bg-sky-300"
          >
            Create
          </button>
          <Link
            href={'/'}
            className="px-3 py-1.5 mt-4 rounded-md bg-sky-200 hover:bg-sky-300"
          >
            Already have account
          </Link>
        </div>
      </form>
    </div>
  );
}
