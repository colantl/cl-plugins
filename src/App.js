import React, { Fragment } from 'react';
import Header from './app/modules/header';
import './App.css';

const navs = [
  { label: 'Home', link: '#' },
  { label: 'About Us', link: '#' },
  { label: 'Contact', link: '#' },
  { label: 'Our Team', link: '#' }
];

const title = {
  label: 'Colantl',
  link: '#',
  font: {
    fontWeight: '500'
  }
}

function App() {
  return (
    <Fragment>
      <Header title={title} navs={navs} />
      <div className='desc'>
        <h1>Header Component</h1>
        <p className='dash'></p>
        <p>Working on a higly customizable header component in React.Js</p>
        <p>Discovering the possibilities of a component's flexibility and ease of use.</p>
      </div>
    </Fragment>
  );
}

export default App;