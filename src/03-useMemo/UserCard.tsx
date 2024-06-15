import React from 'react';
import './usercar.css';
type UserCardProps = {
  name: string;
  email: string;
  image: string;
};

const UserCard = React.memo(({ name, email, image }: UserCardProps) => {
  console.log('USER CARD');
  return (
    <article className="card">
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </article>
  );
});

export default UserCard;
