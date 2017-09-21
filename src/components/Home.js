import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './Sketch'
import sketch2 from './Sketch2'

const Home = (props) => {

  return (
    <div>
      <h1>Home Page</h1>
      <P5Wrapper sketch={sketch} />
      <P5Wrapper sketch={sketch2} />
    </div>

  )
}

export default Home;
