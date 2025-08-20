import { 
  FaPhone, 
  FaWhatsapp, 
  FaFacebook, 
  FaInstagram, 
  FaTiktok, 
  FaLinkedin, 
  FaXTwitter, 
  FaYoutube 
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
// Material Design icons
import { MdEmail, MdLocationOn } from "react-icons/md";

const toStr = (v) => (v == null ? "" : String(v).trim());

const buildHref = (codeNumber, raw) => {
  const v = toStr(raw);
  if (!v) return null;

  switch (codeNumber) {
    case 0: // Mobile
    case 2: // Landline
      return `tel:${v.replace(/[^\d+]/g, "")}`;

    case 1: // Email
      return `mailto:${v}`;

    case 3: // Location
      return v.startsWith("http")
        ? v
        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v)}`;

    case 4: { // WhatsApp
      if (v.startsWith("http")) return v; // already a full WA URL (like your API gives)
      // wa.me expects intl format without + or leading 00
      const digits = v.replace(/\D/g, "");
      const without00 = digits.startsWith("00") ? digits.slice(2) : digits;
      return without00 ? `https://wa.me/${without00}` : null;
    }

    // Socials (use as-is if full URL; otherwise prefix https://)
    case 5: // Facebook
    case 6: // Instagram
    case 7: // TikTok
    case 8: // LinkedIn
    case 9: // X/Twitter
    case 10: // YouTube
      return v.startsWith("http") ? v : `https://${v}`;

    default:
      return null;
  }
};

export const GetIconContact = (codeNumber, size, contact) => {
  const href = buildHref(codeNumber, contact);
  const isExternal = !!(href && href.startsWith("http"));

  const iconMap = {
    0: <FaMobileAlt size={size} />,
    1: <MdEmail size={size} />,
    2: <FaPhone size={size} />,
    3: <MdLocationOn size={size} />,
    4: <FaWhatsapp size={size} />,
    5: <FaFacebook size={size} />,
    6: <FaInstagram size={size} />,
    7: <FaTiktok size={size} />,
    8: <FaLinkedin size={size} />,
    9: <FaXTwitter size={size} />,
    10: <FaYoutube size={size} />,
  };

  const icon = iconMap[codeNumber] ?? null;
  if (!icon) return null;

  return href ? (
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{ display: "inline-flex" }} // ensures clickable area matches the icon
    >
      {icon}
    </a>
  ) : (
    icon
  );
};





