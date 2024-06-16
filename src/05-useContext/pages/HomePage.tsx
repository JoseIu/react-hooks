import { useUser } from '../hook/useUser';

export const HomePage = () => {
  const { user } = useUser();
  console.log(user);
  return <div>HomePage</div>;
};
