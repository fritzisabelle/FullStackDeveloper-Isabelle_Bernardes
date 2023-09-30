import React from 'react';
import { useTranslation } from "react-i18next";
import { HomepageTemplate } from "./style";
import intersection from "../../assets/Intersect.svg";
import wheel from "../../assets/imgs/wheelDetail.svg"
import { AboutMeSection } from './components/aboutme';
import { HeroSection } from './components/hero';
import { RecentWorkSection } from './components/recentWork';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <HomepageTemplate>
      <HeroSection />
      <RecentWorkSection />
      <AboutMeSection />
      <section className="hardSkills-container">
        <div>
          <div>
            <img src={wheel} alt="" />
            <h2>stacks</h2>
            <p>As a Full Stack Developer I try to keep up with the most used languages, frameworks and librarys focusing on being as comprehensive as possible to deliver not only stunning but usefull solutions</p>
          </div>
          <div className="stackCloud-container"></div>
        </div>
      </section>
      <section className="contact-container">
        <h2>LET’S TALK? - GET IN TOUCH - DON’T BE SHY - </h2>
        <div>
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
      </section>
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
