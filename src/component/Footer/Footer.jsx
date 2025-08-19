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
            <h4 className={footerStyles.headerText}>About Our Company</h4>
            <p className={footerStyles.text}>
              We provide high-quality products and services, focusing on
              innovation, customer satisfaction, and building long-term
              relationships with our clients worldwide.
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
            <h4 className={footerStyles.headerText}>Quick Links</h4>
            <ul className={footerStyles.linkList}>
              <li className={footerStyles.linkItem}>
                <Link to="/faq" className={footerStyles.link}>
                  F.A.Q
                </Link>
              </li>
              <li className={footerStyles.linkItem}>
                <Link to="/privacy-policy" className={footerStyles.link}>
                  Privacy Policy
                </Link>
              </li>
              <li className={footerStyles.linkItem}>
                <Link to="/terms" className={footerStyles.link}>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact Info */}
          <div className={footerStyles.blockContainer}>
            <h4 className={footerStyles.headerText}>Connect with Us</h4>
            <div className={footerStyles.socialLinks}>
              {masterBranch?.CompanyBranchContacts?.map((contact) => {
                if (contact.CodeNumber > 9) {
                  return (
                    <a
                      className={footerStyles.linkIcon}
                      href={"#"}
                      key={contact.CompanyBranchContactID}
                    >
                      {GetIconContact(contact.CodeNumber, 20)}
                    </a>
                  );
                }
              })}
            </div>
            {branches?.map((branch) => (
              <div key={branch.BranchID} className={footerStyles.contactInfo}>
                <p>{branch.Address}</p>
                <p>{branch.Phone}</p>
                <p>{branch.Email}</p>
              </div>
            ))}
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
