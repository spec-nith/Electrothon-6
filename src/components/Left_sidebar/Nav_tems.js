import {
  faCalendarDay,
  faHandshake,
  // faHome,
  faIdCardAlt,
  faSearch,
  // faUsers,
  faWindowRestore,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  {
    name: "Schedule",
    id: "schedule",
    icon: faCalendarDay,
  },
  {
    name: "Sponsers",
    id: "sponsers_n",
    icon: faHandshake,
  },
  {
    name: "Themes",
    id: "themes",
    icon: faWindowRestore,
  },
  {
    name: "Prizes",
    id: "prizes_n",
    icon: faTrophy,
  },
  
  
  
  {
    name: "FAQ",
    id: "faq",
    icon: faSearch,
  },
  {
    name: "Contact Us",
    id: "contact",
    icon: faIdCardAlt,
    hide: true,
  },
];

export default navItems;
