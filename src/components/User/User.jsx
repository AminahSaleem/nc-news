import React, { useState, useEffect, useContext } from 'react';
import { getUsers } from '../../utils/api';
import { UserCard } from './UserCard';
import { UserContext } from './UserContext';

const User = () => {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    getUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  const handleLogout = () => {
    setUser('')
  }

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Unable to load users</p>;

  return (
    <section className="cards">
      {users.map(({ username, name, avatar_url }) => {
        return (
          <section key={username}>
            <UserCard username={username} name={name} avatar_url={avatar_url} />
          </section>
        );
      })}
      {!user ? (
        <div>
          <h2>Not logged in</h2>
          <p>Please log in as a user</p>
        </div>
      ) : (
        <div>
          <h2>Logged in as: {user}</h2>
          <button onClick={handleLogout}>Log out</button>
        </div>
      )}
    </section>
  );
};

export default User;