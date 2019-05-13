import React from 'react';
import logo from './logo.svg';
import './App.css';
import { functionTypeAnnotation } from '@babel/types';
import { Title } from './components/Title';
import { AuthorImage } from './components/AuthorImage';
import { Options } from './components/Options';

function App() {
  return (
    <div style={{background:"red", height : 500} }>
    <Title></Title>
    <AuthorImage></AuthorImage>
    <Options></Options>
    </div>
  );
}

export default App;
