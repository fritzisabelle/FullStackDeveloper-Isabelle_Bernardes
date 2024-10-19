import { useTranslation } from "react-i18next";
import { MenuItemStyle } from "./fragments/MenuItemDropDown/menuItemStyle";
import { DropDrowTemplate } from "./fragments/MenuItemDropDown/MenuDropDownTemplate";
import { useContext } from "react";
import { JobsContext } from "../../../providers/JobsContext";

export const DropDownMenu = () => {
  const { t } = useTranslation();
  const { scrollToSection } = useContext(JobsContext);

  return (
    <DropDrowTemplate>
      <MenuItemStyle><button onClick={()=> scrollToSection("recentWorkSection")}>{t("header.who")}</button></MenuItemStyle>
      <MenuItemStyle><button onClick={()=> scrollToSection("aboutMe")}>{t("header.what")}</button></MenuItemStyle>
      <MenuItemStyle><button onClick={()=> scrollToSection("stacks")}>{t("header.work")}</button></MenuItemStyle>
      <MenuItemStyle><button onClick={()=> scrollToSection("contact")}>{t("header.contact")}</button></MenuItemStyle>
    </DropDrowTemplate>
  );
};
