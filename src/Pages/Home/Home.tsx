import React, { useContext } from 'react';
import { useTranslation } from "react-i18next";
import { HomepageTemplate } from "./style";
import { AboutMeSection } from './components/aboutme';
import { HeroSection } from './components/hero';
import { RecentWorkSection } from './components/recentWork';
import { StacksSection } from './components/stacks';
import { ContactSection } from './components/contact';
import { Footer } from '../../components/Footer';
import { JobsContext } from '../../providers/JobsContext';
import { Modal } from './components/Modals/index';

export const Home = () => {
  const { t } = useTranslation();
  const { openModalJobsList, openModalJob } = useContext(JobsContext);


  return (
    <HomepageTemplate>
      {openModalJobsList ? <Modal /> : null}
      {openModalJob ? <Modal /> : null}
      <HeroSection />
      <RecentWorkSection />
      <AboutMeSection />
      <StacksSection />
      <ContactSection />
      <Footer />
    </HomepageTemplate>
  );
};
