import { useState } from 'react';

import { SectionBlock } from '../../UI/SectionBlock/SectionBlock';

import './About.css';

import { AboutChoose } from './AboutBlocks/AboutChoose';
import { AboutContent } from './AboutBlocks/AboutContent';

const About = () => {
  const [counter, setCounter] = useState(0);

  const hanldePlus = () => {
    setCounter(prev => prev + 1);
    console.log(counter);
  };
  const hanldeMinus = () => {
    setCounter(prev => prev - 1);
  };
  return (
    <section className="about">
      <SectionBlock
        title="About Us"
        subtitle="Dedicated to Justice, Driven by Integrity."
      />
      <div className="wrapper">
        <AboutContent />
        <AboutChoose />
        <div className="test">
          <button onClick={hanldeMinus}>-</button>
          <span>{counter}</span>
          <button onClick={hanldePlus}>+</button>
        </div>
      </div>
    </section>
  );
};

export { About };
