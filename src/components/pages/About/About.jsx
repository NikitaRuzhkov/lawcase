import { SectionBlock } from '../../UI/SectionBlock/SectionBlock';

import './About.css';

import { AboutChoose } from './AboutBlocks/AboutChoose';
import { AboutContent } from './AboutBlocks/AboutContent';
import { AboutFounder } from './AboutBlocks/AboutFounder';
import { AboutTeam } from './AboutBlocks/AboutTeam';

const About = () => {
  return (
    <section className="about">
      <SectionBlock
        title="About Us"
        subtitle="Dedicated to Justice, Driven by Integrity."
      />
      <div className="wrapper">
        <AboutContent />
        <AboutChoose />
        <AboutFounder />
        <AboutTeam />
      </div>
      <SectionBlock isDefault={false} />
    </section>
  );
};

export { About };
