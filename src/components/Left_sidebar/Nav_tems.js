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
    name: "Prizes",
    id: "prizes_n",
    icon: faTrophy,
  },
  {
    name: "Sponsers",
    id: "sponsers_n",
    icon: faHandshake,
  },
    {
    name: "Schedule",
    id: "schedule",
    icon: faCalendarDay,
  },
  {
    name: "Themes",
    id: "themes",
    icon: faWindowRestore,
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
