// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { footerStyles } from "./styles";
// import logo from "../../assets/logo.png";
// import { headerStyles } from "../Header/style";
// import { LanguageContext } from "../../context/Language";
// import { GetIconContact } from "../GetIconContact";
// import { ContactContext } from "../../context/Contact";
// function Footer() {
//   const { localization, routes } = useContext(LanguageContext);
//   const { branches, masterBranch } = useContext(ContactContext);

//   return (
//     <footer className={footerStyles.footerContainer}>
//       <div className={footerStyles.innerContainer}>
//         <div className={footerStyles.gridContainer}>
// <div className={footerStyles.blockContainer}>
//   <h4 className={footerStyles.headerText}>
//     {localization.footer.categories}
//   </h4>
//   <ul className={footerStyles.linkList}>
//     {routes?.map((item) => (
//       <li className={footerStyles.linkItem} key={item.id}>
//         <Link
//           to={item.route}
//           title={item.title}
//           className={footerStyles.link}
//         >
//           {item.title}
//         </Link>
//       </li>
//     ))}
//   </ul>
// </div>

//           <div className={footerStyles.blockContainer}>
//             <h4 className={footerStyles.textWhiteBold}>Products</h4>
//             <ul className={footerStyles.linkList}>
//               <li className={footerStyles.linkItem}>
//                 <a
//                   href="javascript:;"
//                   className={footerStyles.textGrayHoverWhite}
//                 >
//                   Figma UI System
//                 </a>
//               </li>
//               <li className={footerStyles.linkItem}>
//                 <a
//                   href="javascript:;"
//                   className={footerStyles.textGrayHoverWhite}
//                 >
//                   Icons Assets
//                 </a>
//               </li>
//               <li className={footerStyles.linkItem}>
//                 <a
//                   href="javascript:;"
//                   className={footerStyles.textGrayHoverWhite}
//                 >
//                   Responsive Blocks
//                 </a>
//               </li>
//               <li className={footerStyles.linkItem}>
//                 <a
//                   href="javascript:;"
//                   className={footerStyles.textGrayHoverWhite}
//                 >
//                   Components Library
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="javascript:;"
//                   className={footerStyles.textGrayHoverWhite}
//                 >
//                   Plugin Guide
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className={footerStyles.blockContainer}>
//             <h4 className={footerStyles.textWhiteBold}>Resources</h4>
//             <ul className={footerStyles.linkList}>
//               <li className={footerStyles.linkItem}>
//                 <a
//                   href="javascript:;"
//                   className={footerStyles.textGrayHoverWhite}
//                 >
//                   FAQs
//                 </a>
//               </li>
//               <li className={footerStyles.linkItem}>
//                 <a
//                   href="javascript:;"
//                   className={footerStyles.textGrayHoverWhite}
//                 >
//                   Quick Start
//                 </a>
//               </li>
//               <li className={footerStyles.linkItem}>
//                 <a
//                   href="javascript:;"
//                   className={footerStyles.textGrayHoverWhite}
//                 >
//                   Documentation
//                 </a>
//               </li>
//               <li className={footerStyles.linkItem}>
//                 <a
//                   href="javascript:;"
//                   className={footerStyles.textGrayHoverWhite}
//                 >
//                   User Guide
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="javascript:;"
//                   className={footerStyles.textGrayHoverWhite}
//                 >
//                   Plugin Guide
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className={footerStyles.blockContainer}>
//             <h4 className={footerStyles.textWhiteBold}>Support</h4>
//             <ul className={footerStyles.linkList}>
//               <li className={footerStyles.linkItem}>
//                 <a
//                   href="javascript:;"
//                   className={footerStyles.textGrayHoverWhite}
//                 >
//                   Customer Support
//                 </a>
//               </li>
//               <li className={footerStyles.linkItem}>
//                 <a
//                   href="javascript:;"
//                   className={footerStyles.textGrayHoverWhite}
//                 >
//                   Cookies
//                 </a>
//               </li>
//               <li className={footerStyles.linkItem}>
//                 <a
//                   href="javascript:;"
//                   className={footerStyles.textGrayHoverWhite}
//                 >
//                   License
//                 </a>
//               </li>
//               <li className={footerStyles.linkItem}>
//                 <a
//                   href="javascript:;"
//                   className={footerStyles.textGrayHoverWhite}
//                 >
//                   Terms & Conditions
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="javascript:;"
//                   className={footerStyles.textGrayHoverWhite}
//                 >
//                   Privacy Policy
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className={footerStyles.borderTop}>
//           <div className={footerStyles.flexContainer}>
//             {/* Add other content here if necessary */}
//             <Link to="/" className={footerStyles.logoContainer}>
//               <img src={logo} alt="Logo" className={headerStyles.logoImage} />
//             </Link>

//             <span className={footerStyles.content}>
//               {localization.footer.copyRight}
//             </span>
//             {masterBranch && (
//               <div className={footerStyles.socialLinks}>
//                 {masterBranch.CompanyBranchContacts?.map((contact) => {
//                   //! take the link of media
//                   if (contact.CodeNumber > 9)
//                     return (
//                       <a
//                         className={footerStyles.linkIcon}
//                         href={"#"}
//                         key={contact.CompanyBranchContactID}
//                       >
//                         {GetIconContact(contact.CodeNumber, 20)}
//                       </a>
//                     );
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { footerStyles } from "./styles";
import logo from "../../assets/logo.png";
import { headerStyles } from "../Header/style";
import { LanguageContext } from "../../context/Language";
import { GetIconContact } from "../GetIconContact";
import { ContactContext } from "../../context/Contact";

function Footer() {
  const { localization, routes } = useContext(LanguageContext);
  const { branches, masterBranch } = useContext(ContactContext);

  return (
    <footer className={footerStyles.footerContainer}>
      <div className={footerStyles.innerContainer}>
        <div className={footerStyles.gridContainer}>
          {/* Company Description */}
          <div className={footerStyles.blockContainer}>
            <h4 className={footerStyles.headerText}>{localization.appInfo.sloganTitle}</h4>
            <p className={footerStyles.text}>
              
              {localization.appInfo.slogan}
            </p>
          </div>
          <div className={footerStyles.blockContainer}>
            <h4 className={footerStyles.headerText}>
              {localization.footer.categories}
            </h4>
            <ul className={footerStyles.linkList}>
              {routes?.map((item) => (
                <li className={footerStyles.linkItem} key={item.id}>
                  <Link
                    to={item.route}
                    title={item.title}
                    className={footerStyles.link}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className={footerStyles.blockContainer}>
            <h4 className={footerStyles.headerText}>{localization.footer.QuickLinks}</h4>
            <ul className={footerStyles.linkList}>
  
              <li className={footerStyles.linkItem}>
                <Link to="/privacy-policy" className={footerStyles.link}>
                {localization.footer.PrivacyPolicy}
                  
                </Link>
              </li>
              <li className={footerStyles.linkItem}>
                <Link to="/terms" className={footerStyles.link}>
                  {localization.footer.TermsAndConditions}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact Info */}
          <div className={footerStyles.blockContainer}>
            <h4 className={footerStyles.headerText}>{localization.about.companyInfo.contactText}</h4>
           <div className={footerStyles.socialLinks}>
  {masterBranch?.companyBranchContacts?.map((contact) => {
    return (
      <div
        key={contact.companyBranchContactID}
        className="flex items-center justify-center w-12 h-12 rounded-full !text-primary shadow"
      >
        {GetIconContact(contact.codeNumber, 22, contact.contact)}
      </div>
    );
  })}
</div>


          </div>
        </div>

        {/* Bottom section */}
        <div className={footerStyles.borderTop}>
          <div className={footerStyles.flexContainer}>
            <Link to="/" className={footerStyles.logoContainer}>
              <img src={logo} alt="Logo" className={headerStyles.logoImage} />
            </Link>
            <span className={footerStyles.content}>
              {localization.footer.copyRight}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
// {branches?.length > 0 && (
//   <div className="mt-6 space-y-4">
//     {branches.map((branch) => (
//       <div
//         key={branch.addressLocationID}
//         className="text-sm text-gray-700"
//       >
//         <p>📍 {branch.address}</p>
//         {/* <p>{branch.Phone}</p>
//         <p>{branch.Email}</p> */}
//       </div>
//     ))}
//   </div>
// )}