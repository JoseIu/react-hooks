import { useUser } from '../hook/useUser';

export const HomePage = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div>
      <h1>Home Page</h1>
      <span aria-label="user">{user.name} </span>
    </div>
  );
};
