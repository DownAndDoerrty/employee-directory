import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import App from './components/App';
import GraphQLClient from './utils/GraphQLClient';
import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={GraphQLClient}>
    <App />
  </ApolloProvider>
);
