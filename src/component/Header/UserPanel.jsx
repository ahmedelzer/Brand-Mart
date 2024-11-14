import { RegistrationContext } from "../../context/Registration";
import { LanguageContext } from "../../context/Language";
import React, { useContext, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
function UserPanel({ useTheme = true }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { localization } = useContext(LanguageContext);
  const { personalInfo, isSigh } = useContext(RegistrationContext);

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }
  if (!isSigh) {
    return <></>;
  }
  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggleDropdown}
      className="relative z-50" // Ensures the dropdown is in front
    >
      <DropdownToggle
        tag="div"
        className="mx-2 flex items-center cursor-pointer"
      >
        <img
          src={localization.userPanel.avatarUrl}
          className="w-10 h-10 rounded-lg mx-2"
          alt="User Avatar"
        />
        <p className="font-bold text-md">
          {personalInfo.firstName + " " + personalInfo.lastName}
        </p>
      </DropdownToggle>
      <DropdownMenu className={`${useTheme ? "text-center !bg-text" : ""}`}>
        <div className="flex flex-col">
          <button
            className={`${
              useTheme
                ? "!text-primary p-2 hover:bg-body transition-all duration-300"
                : ""
            }`}
          >
            {localization.userPanel.switchAccount}
          </button>
          <button
            className={`${
              useTheme
                ? "!text-primary p-2 hover:bg-body transition-all duration-300"
                : ""
            }`}
          >
            {localization.userPanel.logout}
          </button>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
}

export default UserPanel;
