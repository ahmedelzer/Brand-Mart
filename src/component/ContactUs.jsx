import React, { useContext } from "react";
import Request from "./Request";
import PageHeading from "./PageHeading";
import { contactUsStyles } from "./styles";
import { LanguageContext } from "../context/Language";
import { GetIconContact } from "./GetIconContact";
import { ContactContext } from "../context/Contact";

function ContactUs() {
  const { localization } = useContext(LanguageContext);
  const { branches, masterBranch } = useContext(ContactContext);

  return (
    <div className={contactUsStyles.container}>
      <section className={contactUsStyles.section}>
        <div className={contactUsStyles.headingWrapper}>
          <PageHeading
            subTitle={localization.contact.companyInfo.PageHeading.subTitle}
            title={localization.contact.companyInfo.PageHeading.title}
            desc={localization.contact.companyInfo.PageHeading.desc}
          />
        </div>

        <div className={contactUsStyles.contentWrapper}>
          <Request />

          <div className={contactUsStyles.requestWrapper}>
            <div className={contactUsStyles.contactInfoWrapper}>
              {masterBranch.CompanyBranchContacts.map((contact) => (
                <div
                  className={contactUsStyles.infoBlock}
                  key={contact.ContactTypeID}
                >
                  <div className={contactUsStyles.infoIconWrapper}>
                    <div className={contactUsStyles.iconContainer}>
                      <div className={contactUsStyles.iconStyle}>
                        {/* SVG Icon */}
                        {GetIconContact(contact.CodeNumber, 30)}
                      </div>
                    </div>
                    <div className={contactUsStyles.infoTextWrapper}>
                      <p className={contactUsStyles.infoTitle}>
                        {contact.Contact}
                      </p>
                      {/* <p className={contactUsStyles.infoDetails}>
                      {localization.contact.sales.email}
                    </p>
                    <p className={contactUsStyles.infoDetails}>
                      {localization.contact.sales.phone}
                    </p> */}
                    </div>
                  </div>
                </div>
              ))}

              {/* Repeat for other info blocks, like Sales, Press, Bug Report */}

              {/* Add the rest of the contact info sections similarly */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
