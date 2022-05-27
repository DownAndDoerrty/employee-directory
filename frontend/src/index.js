import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import App from './components/App';
import graphQLClient from './utils/graphQLClient.ts';
import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={graphQLClient}>
    <App />
  </ApolloProvider>
);
