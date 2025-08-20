import React, { useContext } from "react";
import { staffStyles } from "./styles";
import { LanguageContext } from "../context/Language";
import useFetch from "../hooks/APIsFunctions/useFetch";
import { baseURL, GetProjectUrl, publicImageURL, SetReoute } from "../request";
import Loading from "./Loading/Loading";
import { convertGMTToLocalTime } from "../utils/timeUtils";
import { ContactContext } from "../context/Contact";
import { GetIconContact } from "./GetIconContact";

function Staff() {
  const { localization } = useContext(LanguageContext);
  SetReoute("BrandingMart");
  const { data: staff, isLoading } = useFetch(
    "/BrandingMart/GetAllDisplayedStaff",
    GetProjectUrl()
  );
  const { branches, masterBranch } = useContext(ContactContext);

  // {
  //           "dailyStaffAttendanceID": "738adba1-e77d-4ee3-a410-3300f1b04375",
  //           "organizationShiftID": "e12b3d2a-eefd-4b4e-a437-99f38b62d4ef",
  //           "staffMemberID": "5d1cb48f-0640-4027-bc41-14dc209bdc33",
  //           "dayID": "ce19fb9f-2e10-4444-ae0f-009f5ead133c",
  //           "day": null,
  //           "attendanceDate": "2025-08-04",
  //           "scheduledStartTime": "18:00:00",
  //           "scheduledEndTime": "22:00:00",
  //           "firstDetectedTime": "2025-08-04T18:41:34.02",
  //           "lastDetectedTime": "2025-08-04T18:42:49.597",
  //           "firstDetectedTimeFlag": -2,
  //           "lastDetectedTimeFlag": -2,
  //           "lastEscapeTime": null,
  //           "lastReconnectTime": null,
  //           "totalEscapeDuration": "00:00:00",
  //           "isEscapeCritical": false,
  //           "reviewStatusIndex": 0,
  //           "supervisorNotes": null,
  //           "fullName": "Ashraf Shmrdn",
  //           "memberTypeName": "طباخ",
  //           "organizationDepartmentName": "المطبج",
  //           "staffMemberCodeNumber": "SM001",
  //           "personalImagePath": "StaffImages/Ashraf.png",
  //           "detectedTime": "0001-01-01T00:00:00"
  //       }

  if (!staff && isLoading) {
    return <Loading />;
  }
  const ReturnStaffContacts = ({ contacts }) => {
    return (
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 min-w-max">
          {contacts?.map((contact) => (
            <div
              key={contact.companyBranchContactID}
              className={staffStyles.icon}
            >
              {GetIconContact(contact.codeNumber, 15, contact.contact)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={staffStyles.container}>
      <section className={staffStyles.section}>
        <h2 className={staffStyles.heading}>
          {localization.about.staff.meetThe}{" "}
          <u className={staffStyles.accentText}>
            {localization.about.staff.team}
          </u>
        </h2>

        <div className={staffStyles.grid}>
          {staff?.dataSource?.map((person) => (
            <div
              className={staffStyles.cardContainer}
              key={person.staffMemberID}
            >
              <div className={staffStyles.card}>
                <div className={staffStyles.imageWrapper}>
                  <div className={staffStyles.imageInner}>
                    <img
                      src={`${publicImageURL}/${person?.personalImagePath}`}
                      className={staffStyles.image}
                      alt={person.fullName}
                    />
                  </div>
                </div>
                <div className={staffStyles.content}>
                  <h5 className={staffStyles.name}>{person.fullName}</h5>
                  <p className={staffStyles.role}>{person.memberTypeName}</p>
                  <p className={staffStyles.role}>
                    {localization.about.staff.workingIn}{" "}
                    <span className="!text-primary font-bold">
                      {person.organizationDepartmentName}
                    </span>
                  </p>
                  <ul className={staffStyles.socialIcons}>
                    <ReturnStaffContacts
                      contacts={
                        staff?.contacts || masterBranch?.companyBranchContacts
                      }
                    />
                  </ul>
                </div>
              </div>
            </div>
          ))}
          {isLoading && <Loading />}
        </div>
      </section>
    </div>
  );
}

export default Staff;
