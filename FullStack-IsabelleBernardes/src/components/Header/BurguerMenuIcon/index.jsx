import { useTranslation } from "react-i18next";
import { MenuItemStyle } from "./fragments/MenuItemDropDown/menuItemStyle";
import { DropDrowTemplate } from "./fragments/MenuItemDropDown/MenuDropDownTemplate";

export const DropDownMenu = () => {
  const { t } = useTranslation();

  return (
    <DropDrowTemplate>
      <MenuItemStyle>{t("who")}</MenuItemStyle>
      <MenuItemStyle>{t("what")}</MenuItemStyle>
      <MenuItemStyle>{t("work")}</MenuItemStyle>
      <MenuItemStyle>{t("contact")}</MenuItemStyle>
    </DropDrowTemplate>
  );
};
