import React, { useContext } from "react";
import PageHeading from "./PageHeading";
import { playlistStyles, sectionStyles } from "./styles";
import { LanguageContext } from "../context/Language";
import { GetIconContact } from "./GetIconContact";
import BranchesByLocationMap from "./BranchesByLocationMap";
import { ContactContext } from "../context/Contact";

function CompanyInfo() {
  const { localization } = useContext(LanguageContext);
  const { branches, masterBranch } = useContext(ContactContext);

  return (
    <section className={sectionStyles.container} id="contact">
      <div className={sectionStyles.heading}>
        <PageHeading
          subTitle={localization.about.companyInfo.PageHeading.subTitle}
          title={localization.about.companyInfo.PageHeading.title}
         
        />
        <div className="flex justify-between flex-wrap">
          <div className="h-full w-full md:w-1/2 pr-6 flex align-self-center">
            <ul className={sectionStyles.list}>
              <li className={sectionStyles.listItem}>
                <div className={sectionStyles.iconContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={sectionStyles.icon}
                  >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                </div>
                <div className={sectionStyles.itemContent}>
                  <h3 className={sectionStyles.title}>
                    {localization.about.companyInfo.ourAddress}
                  </h3>
                  {branches.map((branch) => (
                    <p
                      className={sectionStyles.text}
                      key={branch.addressLocationID}
                    >
                      {branch.address}
                    </p>
                  ))}
                  {/* <p className={sectionStyles.text}>
                      {localization.about.companyInfo.addressLine1}
                    </p>
                    <p className={sectionStyles.text}>
                      {localization.about.companyInfo.addressLine2}
                    </p> */}
                </div>
              </li>
              {masterBranch &&
                masterBranch.companyBranchContacts.length > 0 && (
                  <li className={sectionStyles.listItem}>
                    <div className={sectionStyles.iconContainer}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={sectionStyles.icon}
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
<div className={sectionStyles.itemContent}>
  <h3 className={sectionStyles.title}>
    {localization.about.companyInfo.contactText}
  </h3>

  <div className="flex flex-wrap justify-center items-center gap-3">
    {masterBranch.companyBranchContacts?.map((c) => (
      <div
        key={c.companyBranchContactID}
        className="flex items-center justify-center w-12 h-12 rounded-full !text-primary shadow"
      >
        {GetIconContact(c.codeNumber, 22, c.contact)}
      </div>
    ))}
  </div>
</div>


                  </li>
                )}
             {masterBranch && Array.isArray(masterBranch.companyBranchWorkHours) && (
  <li className={sectionStyles.listItem} key={masterBranch.companyBranchID}>
    <div className={sectionStyles.iconContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={sectionStyles.icon}
      >
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
        <path d="M12 7v5l3 3"></path>
      </svg>
    </div>
    <div className={sectionStyles.itemContent}>
      <h3 className={sectionStyles.title}>
        {localization.about.companyInfo.workingHours}
      </h3>
      <ul className="mt-2">
{masterBranch.companyBranchWorkHours.map((workHour) => {
  const today = new Date().getDay(); // Sunday = 0

  
const currentTime = new Date();
  const isToday = today === workHour.dayIndex;

  const convertUTCToLocalTime = (timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    let totalMinutes = hours * 60 + minutes;
    const timezoneOffset = -new Date().getTimezoneOffset(); // flip sign for addition
    totalMinutes = (totalMinutes + timezoneOffset + 1440) % 1440;
    const localHours = String(Math.floor(totalMinutes / 60)).padStart(2, '0');
    const localMinutes = String(totalMinutes % 60).padStart(2, '0');
    return `${localHours}:${localMinutes}`;
  };

  const getMinutesFromTime = (timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
  };
const SOON_THRESHOLD_MINUTES = 30;  // Time before opening to show "Open Soon"
const NEAR_CLOSE_THRESHOLD_MINUTES = 30;  // Time before closing to show "Near Close"

  const localStartTime = convertUTCToLocalTime(workHour.startTime);
  const localEndTime = convertUTCToLocalTime(workHour.endTime);

  // Convert times to minutes for comparison
  const nowMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
  const startMinutes = getMinutesFromTime(localStartTime);
  const endMinutes = getMinutesFromTime(localEndTime);

  // Determine if current time is outside of working hours
 let statusLabel =localization.about.companyInfo.Closed ;

  if (isToday) {
    if (nowMinutes >= startMinutes && nowMinutes <= endMinutes) {
      // Inside working hours
      if (endMinutes - nowMinutes <= NEAR_CLOSE_THRESHOLD_MINUTES) {
        statusLabel = 'Near Close';
      } else {
        statusLabel = 'Open Now';
      }
    } else if (nowMinutes < startMinutes && startMinutes - nowMinutes <= SOON_THRESHOLD_MINUTES) {
      // Before start time but within "Open Soon" threshold
      statusLabel = "";
    }
  }

  return (
    <li
      key={workHour.companyBranchDayWorkHoursID}
      className={`flex justify-between gap-2 text-sm md:text-base px-2 py-1 !text-primary rounded ${
        isToday ? 'bg-text opacity-50' : ''
      }`}
    >
      <span>{workHour.dayName}</span>
      <span>
        {localStartTime} - {localEndTime} 
        {isToday && statusLabel !="" && (
          <span className="ml-2 font-bold">
            ({statusLabel})
          </span>
        )}
      </span>
    </li>
  );
})}


      </ul>
    </div>
  </li>
)}

            </ul>
          </div>
          {branches.length > 0 && (
            <div className="card w-full md:w-1/2 p-1 bg-body z-0">
              <BranchesByLocationMap branches={branches} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CompanyInfo;
