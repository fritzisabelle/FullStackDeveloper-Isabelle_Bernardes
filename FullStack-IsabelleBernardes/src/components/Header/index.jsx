import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { HeaderTemplateStyle } from "../../style/HeaderStyle/HeaderTemplate";
import logo from "../../assets/logo-isabellebernardes.png";
import { DropDownMenu } from "./BurguerMenuIcon";
import { useState } from "react";
import menuIcon from "../../assets/burguer-menu-icon.png";

function HeaderTemplate() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderTemplateStyle className={`red ${open ? "open" : "close"}`}>
        <img className="logo" src={logo} />
        <ul>
          <li>
            <a href="">{t("who")}</a>
          </li>
          <li>
            <a href="">{t("what")}</a>
          </li>
          <li>
            <a href="">{t("work")}</a>
          </li>
          <li>
            <a href="">{t("contact")}</a>
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
