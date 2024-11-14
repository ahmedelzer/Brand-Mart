import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
export const GetIconContact = (CodeNumber, size) => {
  switch (CodeNumber) {
    case 0:
      return <FaPhone size={size} />;
    case 1:
      return <MdEmail size={size} />;
  }
};
