
import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from 'contexts';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Section from 'hoc/Section';
import SectionAlternate from 'hoc/SectionAlternate';
import Hero from './Hero';
import Partners from './Partners';
import Customization from './Customization';
import Support from './Support';
import Download from './Download';
import { integrations, support } from 'utils/helper/mockupData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Home = () => {
  const classes = useStyles();
  const { setLoadingInfo, account } = useContext(AppContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  AOS.init({
    once: true,
    delay: 50,
    duration: 500,
    easing: 'ease-in-out',
  });

  return (
    <div className={classes.root}>
      <Section >
        <Hero />
      </Section>
      {/* <Section>
        <Partners data={integrations} />
      </Section>
      <SectionAlternate>
        <Customization />
      </SectionAlternate>
      <Section narrow>
        <Support data={support} />
      </Section>
      <Section>
        <Download data={[]} />
      </Section> */}
    </div>
  );
};

export default Home;
