import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

import App from './App';
import "./Css.css";

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})



ReactDOM.render(
  <ApolloProvider client={client}>
<BrowserRouter>
    <App />
  </BrowserRouter>
 
  
</ApolloProvider>

  ,
  document.getElementById('root')
);


