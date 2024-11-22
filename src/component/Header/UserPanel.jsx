import { RegistrationContext } from "../../context/Registration";
import { LanguageContext } from "../../context/Language";
import React, { useContext, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
function UserPanel({ useTheme = true }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(window.location.pathname);
  const { localization } = useContext(LanguageContext);
  const { personalInfo, isSigh, setIsSigh, setPersonalInfo } =
    useContext(RegistrationContext);
  const navigate = useNavigate();
  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }
  function switchAccount() {
    //   navigate(selectedPage);
    // setIsSigh(false);
    // setPersonalInfo({});
  }
  function logout() {
    setIsSigh(false);
    setPersonalInfo({});
    if (selectedPage.startsWith("/form")) {
      location.reload();
    }
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
            onClick={switchAccount}
          >
            {localization.userPanel.switchAccount}
          </button>
          <button
            className={`${
              useTheme
                ? "!text-primary p-2 hover:bg-body transition-all duration-300"
                : ""
            }`}
            onClick={logout}
          >
            {localization.userPanel.logout}
          </button>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
}

export default UserPanel;
