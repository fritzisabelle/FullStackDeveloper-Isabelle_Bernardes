import React from 'react';
import { useTranslation } from "react-i18next";
import { HomepageTemplate } from "./style";
import intersection from "../../assets/Intersect.svg";
import { AboutMeSection } from './components/aboutme';
import { HeroSection } from './components/hero';
import { RecentWorkSection } from './components/recentWork';
import { StacksSection } from './components/stacks';
import { ContactSection } from './components/contact';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <HomepageTemplate>
      <HeroSection />
      <RecentWorkSection />
      <AboutMeSection />
      <StacksSection />
      <ContactSection />
      {/* <section className="contact-container">
        <h2>LET’S TALK? - GET IN TOUCH - DON’T BE SHY - WANNA HAVE A COFFEE? -</h2>
        <div className='contactButtons-container'>
          <div>
            <h3>connect with me</h3>
            <button>https://www.linkedin.com/in/euisabellebernardes/</button>
          </div>
          <div>
            <h3>Email me</h3>
            <button>Clique aqui para ser redirecionado ao seu serviço de email</button>
          </div>
          <div>
            <h3>FIND ME ON GITHUB</h3>
            <button>https://www.linkedin.com/in/euisabellebernardes/</button>
          </div>
        </div>
      </section> */}
      <footer>
        <div className="intersection-container">
          <img src={intersection} alt="detail" />
          <img src={intersection} alt="detail" />
          <img src={intersection} alt="detail" />
        </div>
        <button>back to the top</button>
        <small>Isabelle Bernardes © All rights reserved.</small>
      </footer>
    </HomepageTemplate>
  );
};
