import { useMemo, useState } from 'react';
import USERS from '../data/users.json';
import { useCounter } from '../hooks/useCounter';
import { useForm } from '../hooks/useForm';
import { UserInterface } from '../interfaces/user.interface';
import Span from './Span';
import UserCard from './UserCard';

interface formFiler {
  search: string;
}
const UsersMeno = () => {
  const [users, setUsers] = useState(USERS as UserInterface[]);

  const { increment, counter } = useCounter(10);

  const { formState, onInputChange } = useForm<formFiler>({ search: '' });

  const usersMemorized = useMemo(() => {
    const usersFiltered = filterByName(users, formState.search);
    return usersFiltered;
  }, [users, formState.search]);

  return (
    <>
      <input type="text" name="search" id="search" value={formState.search} onChange={onInputChange} />
      <Span value={counter} />
      <button onClick={() => increment(1)}>+1</button>
      <div className="gird">
        {usersMemorized.map((user) => (
          <UserCard key={user.id} email={user.email} name={user.name} image={user.image} />
        ))}
      </div>
    </>
  );
};

export default UsersMeno;

const filterByName = (users: UserInterface[], search: string) => {
  console.log('filterByName');
  if (!search) return [...users];

  const searchLower = search.toLocaleLowerCase();
  return users.filter((user) => user.name.toLocaleLowerCase().includes(searchLower));
};
