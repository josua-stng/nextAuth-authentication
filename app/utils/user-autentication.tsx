import Link from 'next/link';

export default function FormUser() {
  return (
    <form
      className="flex flex-col  [&>*]:py-1
     [&>*]:rounded items-center justify-center "
    >
      <input
        type="text"
        placeholder="enter username"
        className="w-max mt-5 pl-2 border-2 border-gray-500"
      />
      <input
        type="text"
        placeholder="enter email"
        className="w-max mt-2 pl-2 border-2 border-gray-500"
      />
      <div>
        <button
          type="submit"
          className="px-3 py-1.5 mt-4 rounded-md bg-sky-200 hover:bg-sky-300"
        >
          Submit
        </button>
        <Link
          href={'/user-signUp'}
          className="px-3 py-1.5 mt-4 rounded-md bg-sky-200 hover:bg-sky-300 ml-5"
        >
          Signup
        </Link>
      </div>
    </form>
  );
}
