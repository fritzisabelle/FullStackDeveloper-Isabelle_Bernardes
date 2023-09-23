import { useTranslation } from "react-i18next";
import { HeroSectionTemplate } from "./heroSectionStyle";
import { HomepageTemplate } from "./homeStyle";
import bgHero from "../../assets/bgHero.png";
import intersection from "../../assets/Intersect.svg";

export const HomeTemplate = () => {
  const { t } = useTranslation();

  return (
    <HomepageTemplate>
      <HeroSectionTemplate>
        <img className="bgHero" src={bgHero} />
        <div className="spotlight-container">
          <div className="spotlight sptl-1"></div>
          <div className="spotlight sptl-2"></div>
        </div>
        <h1>
          FULL STACK
          <br /> DEVELOPER
        </h1>
        <div className="itens-bottom">
          <div>
            <p>DESIGN</p>
            <p>{t("tech-heroDetail")}</p>
          </div>
          <div className="work-button-container">
            <div className="intersection-container">
              <img src={intersection} alt="detail" />
              <img src={intersection} alt="detail" />
              <img src={intersection} alt="detail" />
            </div>
            <p>{t("work-heroDetail")}</p>
          </div>
          <div>
            <p>UI DESIGN</p>
            <p>{t("dev-heroDetail")}</p>
          </div>
        </div>
      </HeroSectionTemplate>
      <section className="home-recentWorkSection">
        <h3>RECENT WORK</h3>
        <h2>DESIGN & DEVELOPMENT</h2>
      </section>
    </HomepageTemplate>
  );
};
