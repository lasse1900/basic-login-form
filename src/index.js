import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

import 'antd/dist/antd.css';

import Routes from './routes';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <button onClick={event =>  window.location.href='/login'}>Login</button>
    <button onClick={event =>  window.location.href='/register'}>Register</button>
    <button onClick={event =>  window.location.href='/auth'}>Auth</button>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
