import SignOut from '@/components/sign-out';
import Image from 'next/image';

export default function UserActivePage({ username, email, image }: any) {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div className="border-2 border-black w-max p-5 ">
        <h1 className="text-center">Hello</h1>
        <p>Name: {username}</p>
        <p>Email: {email}</p>
        <p>Image:</p>
        <Image src={image} width={200} height={200} alt="github_image" />
        <SignOut />
      </div>
    </div>
  );
}
