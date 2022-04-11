import React from 'react';

import { useLazyQuery } from '@apollo/client';
// @ts-ignore
import Userfront from '@userfront/react';

import { QUERY } from './Home.query';

type GetTodosData = {
  getTodos: { id: string; title: string }[];
};

const Home = (): JSX.Element => {
  const [getTodos, { data, loading, error }] =
    useLazyQuery<GetTodosData>(QUERY);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <header>
        <h1>Home</h1>
        <p>Hello {Userfront.user.name} </p>
      </header>
      {data &&
        data.getTodos &&
        data.getTodos.map((todo) => <span key={todo.id}>{todo.title}</span>)}
      <button onClick={() => getTodos()}>Make API call</button>
      <button onClick={Userfront.logout}>Logout</button>
    </div>
  );
};

export default Home;
