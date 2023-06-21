import Component from '@/components/login-btn';
import { getServerSession } from 'next-auth';
import UserActivePage from './utils/user-active-github';

export default async function Home() {
  const server = await getServerSession();
  console.log(server);
  return (
    <div>
     
      {server ? (
        <div>
          <UserActivePage
            username={server.user?.name}
            email={server.user?.email}
            image={server.user?.image}
          />
        </div>
      ) : (
        <Component />
      )}
    </div>
  );
}
