import { useTranslation } from "react-i18next";
import { HeroSectionTemplate } from "./heroSectionStyle";
import { HomepageTemplate } from "./homeStyle";
import bgHero from "../../assets/bgHero.png";
import intersection from "../../assets/Intersect.svg";
import { JobList } from "../../utils/jobsList";
import arrowRight from "../../assets/imgs/arrowRight.svg"
import profilePicture from "../../assets/imgs/profile.jpg"

export const Home = () => {
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
        <h3>RECENT WORK <span>RECENT WORK</span> RECENT WORK <span>RECENT WORK</span> RECENT WORK <span>RECENT WORK</span> </h3>
        <h2>DESIGN & DEVELOPMENT</h2>
        <div className="jobCards-container">
          <div className="jobCard">
            <img src={JobList[0].cover} alt="" className="jobCard_cover"/>
            <h4 className="jobCard_ProjectCategory_Tag">FRONT END</h4>
            <div className="jobCard_details">
              <div className="jobCard_details_info">
                <h5 className="jobCard_details_info_JobTitle">Motolink</h5>
                <p className="jobCard_details_info_JobType">Web Application</p>
              </div>
              <button className="jobCard_details_button">
                <img src={arrowRight} alt="" />
              </button>
            </div>
          </div>
          <div className="jobCard">
            <img src={JobList[0].cover} alt="" className="jobCard_cover"/>
            <h4 className="jobCard_ProjectCategory_Tag">FRONT END</h4>
            <div className="jobCard_details">
              <div className="jobCard_details_info">
                <h5 className="jobCard_details_info_JobTitle">Motolink</h5>
                <p className="jobCard_details_info_JobType">Web Application</p>
              </div>
              <button className="jobCard_details_button">
                <img src={arrowRight} alt="" />
              </button>
            </div>
          </div>
          <div className="jobCard">
            <img src={JobList[0].cover} alt="" className="jobCard_cover"/>
            <h4 className="jobCard_ProjectCategory_Tag">FRONT END</h4>
            <div className="jobCard_details">
              <div className="jobCard_details_info">
                <h5 className="jobCard_details_info_JobTitle">Motolink</h5>
                <p className="jobCard_details_info_JobType">Web Application</p>
              </div>
              <button className="jobCard_details_button">
                <img src={arrowRight} alt="" />
              </button>
            </div>
          </div>
          <div className="jobCard">
            <img src={JobList[0].cover} alt="" className="jobCard_cover"/>
            <h4 className="jobCard_ProjectCategory_Tag">FRONT END</h4>
            <div className="jobCard_details">
              <div className="jobCard_details_info">
                <h5 className="jobCard_details_info_JobTitle">Motolink</h5>
                <p className="jobCard_details_info_JobType">Web Application</p>
              </div>
              <button className="jobCard_details_button">
                <img src={arrowRight} alt="" />
              </button>
            </div>
          </div>
          
        </div>
        <div className="button-container">
          <button className="button-seeMore">
            Ver mais projetos
            <img src={arrowRight} alt="arrow icon"/>
          </button>
        </div>
      </section>
      <section>
        <div className="intersection-container">
          <img src={intersection} alt="detail" />
          <img src={intersection} alt="detail" />
          <img src={intersection} alt="detail" />
        </div>
        <div className="profilePicture-container">
          <p>BEHIND</p>
        <img src={profilePicture} alt="profile picture of author" className="side-picture" />
          <img src={profilePicture} alt="profile picture of author" className="middle-picture" />
          <img src={profilePicture} alt="profile picture of author" className="side-picture" />
          <p>THE SKILLS</p>
        </div>
    <div className="softSkills-cards-container">
      <div className="softSkill-card">
        <div className="softSkill-card_header">
          <p className="softSkill-card_title">About Me</p>
          <small className="softSkill-card_number">/1</small>
        </div>
        <p>Me chamo Isabelle, sou do Rio de Janeiro, e para o desgosto dos meus conterrâneos, praia não é o meu lugar preferido. Adoro cozinhar e ler livros. Gosto de ficar no meu espaço mas também gosto de momentos de extroversão</p>
      </div>
    </div>
      </section>
      <section></section>
    </HomepageTemplate>
  );
};
