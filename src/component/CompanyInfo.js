import React, { useContext } from "react";
import PageHeading from "./PageHeading";
import { playlistStyles, sectionStyles } from "./styles";
import { LanguageContext } from "../context/Language";
import { GetIconContact } from "./GetIconContact";
import BranchesByLocationMap from "./BranchesByLocationMap";
import { ContactContext } from "../context/Contact";
import { CiLocationOn } from "react-icons/ci";
import { GrContactInfo } from "react-icons/gr";
import { TbClockHour5 } from "react-icons/tb";
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
                  <CiLocationOn size={35} />
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
                      <GrContactInfo size={35} />
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
              {masterBranch &&
                Array.isArray(masterBranch.companyBranchWorkHours) && (
                  <li
                    className={sectionStyles.listItem}
                    key={masterBranch.companyBranchID}
                  >
                    <div className={sectionStyles.iconContainer}>
                      <TbClockHour5 size={35} />
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
                            const [hours, minutes] = timeString
                              .split(":")
                              .map(Number);
                            let totalMinutes = hours * 60 + minutes;
                            const timezoneOffset =
                              -new Date().getTimezoneOffset(); // flip sign for addition
                            totalMinutes =
                              (totalMinutes + timezoneOffset + 1440) % 1440;
                            const localHours = String(
                              Math.floor(totalMinutes / 60)
                            ).padStart(2, "0");
                            const localMinutes = String(
                              totalMinutes % 60
                            ).padStart(2, "0");
                            return `${localHours}:${localMinutes}`;
                          };

                          const getMinutesFromTime = (timeString) => {
                            const [hours, minutes] = timeString
                              .split(":")
                              .map(Number);
                            return hours * 60 + minutes;
                          };
                          const SOON_THRESHOLD_MINUTES = 30; // Time before opening to show "Open Soon"
                          const NEAR_CLOSE_THRESHOLD_MINUTES = 30; // Time before closing to show "Near Close"

                          const localStartTime = convertUTCToLocalTime(
                            workHour.startTime
                          );
                          const localEndTime = convertUTCToLocalTime(
                            workHour.endTime
                          );

                          // Convert times to minutes for comparison
                          const nowMinutes =
                            currentTime.getHours() * 60 +
                            currentTime.getMinutes();
                          const startMinutes =
                            getMinutesFromTime(localStartTime);
                          const endMinutes = getMinutesFromTime(localEndTime);

                          // Determine if current time is outside of working hours
                          let statusLabel =
                            localization.about.companyInfo.Closed;

                          if (isToday) {
                            if (
                              nowMinutes >= startMinutes &&
                              nowMinutes <= endMinutes
                            ) {
                              // Inside working hours
                              if (
                                endMinutes - nowMinutes <=
                                NEAR_CLOSE_THRESHOLD_MINUTES
                              ) {
                                statusLabel =
                                  localization.about.companyInfo.NearClosed;
                              } else {
                                statusLabel =
                                  localization.about.companyInfo.OpenedNow;
                              }
                            } else if (
                              nowMinutes < startMinutes &&
                              startMinutes - nowMinutes <=
                                SOON_THRESHOLD_MINUTES
                            ) {
                              // Before start time but within "Open Soon" threshold
                              statusLabel = "";
                            }
                          }

                          return (
                            <div
                              className={`size-full text-sm md:text-base px-2 py-1 !text-primary rounded ${
                                isToday ? "bg-text opacity-50" : ""
                              }`}
                            >
                              <li
                                key={workHour.companyBranchDayWorkHoursID}
                                className={`grid grid-cols-2 items-center gap-2 text-sm md:text-base px-2 py-1 !text-primary rounded`}
                              >
                                {/* Column 1: Day name */}
                                <span>{workHour.dayName}</span>

                                {/* Column 2: Time range */}
                                <span className="whitespace-nowrap text-ellipsis">
                                  {localStartTime} - {localEndTime}
                                </span>

                                {/* Column 3: Status label */}
                              </li>
                              {isToday && statusLabel !== "" ? (
                                <div className="text-sm font-bold text-center overflow-hidden text-ellipsis">
                                  ({statusLabel})
                                </div>
                              ) : (
                                <div></div>
                              )}
                            </div>
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
