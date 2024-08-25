import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { HeaderTemplateStyle } from "../../style/HeaderStyle/HeaderTemplate";
import logo from "../../assets/logo-isabelleamorim.png";
import { DropDownMenu } from "./BurguerMenuIcon";
import { useContext, useState } from "react";
import menuIcon from "../../assets/burguer-menu-icon.png";
import { Link } from 'react-router-dom';
import { JobsContext } from "../../providers/JobsContext";

function HeaderTemplate() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { scrollToSection } = useContext(JobsContext);

  return (
    <>
      <HeaderTemplateStyle className={`red ${open ? "open" : "close"}`}>
        <Link to={"/"}>
          <img className="logo" src={logo} />
        </Link>
        <ul>
          <li>
            <button onClick={() => scrollToSection("recentWorkSection")}>{t("header.work")}</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("aboutMe")}>{t("header.who")}</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("stacks")}>{t("header.what")}</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")}>{t("header.contact")}</button>
          </li>
        </ul>
        <div className="utils-menu">
          <LanguageSwitcher />
          <div className="BurguerMenuTrigger" onClick={() => setOpen(!open)}>
            <img src={menuIcon} alt="burguer menu icon" />
          </div>
        </div>
      </HeaderTemplateStyle>
      {open ? <DropDownMenu /> : null}
    </>
  );
}

export default HeaderTemplate;
