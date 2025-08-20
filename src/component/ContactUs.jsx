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

      {/* Contacts centered */}
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {masterBranch?.companyBranchContacts?.map((contact) => (
          <div
            key={contact.companyBranchContactID}
            className="flex items-center justify-center w-12 h-12 rounded-full !text-primary shadow"
          >
            {GetIconContact(contact.codeNumber, 22, contact.contact)}
          </div>
        ))}
      </div>

      {/* Content wrapper */}
      <div className={contactUsStyles.contentWrapper}>
        {/* FAQ Link above Request */}
        <a
          href="/faq"
          className="block mb-4 text-primary underline hover:text-secondary transition text-center"
        >
          {localization.contact.companyInfo.FAQLink}
        </a>

        {/* Request component */}
        <Request />
      </div>
    </section>
  </div>
);

}

export default ContactUs;
