import React from 'react';
import Header from './_components/Header';
import Intro from './_components/Intro';
import AboutSec from './_components/AboutSec';

const Provider = ({children}) => {
  return (
    <div>
        <Header />
       
        {children}
    </div>
  )
}

export default Provider