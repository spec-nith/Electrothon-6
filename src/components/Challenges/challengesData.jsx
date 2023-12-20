import polygon from "../../assets/images/polygon.webp.png";
import replit from "../../assets/images/Replit.webp.png";
import solana from "../../assets/images/solana.webp.png";
import filecoin from "../../assets/images/filecoin.webp.png";
import fire from "../../assets/images/5ire.webp.png";

export const challengesData = [
  {
    desc: [
      "₹10,000 for the best hack built on Ethereum",
      "₹15,000 for the best hack built on Ethereum + Polygon",
      "Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners! ",
    ],
    img: "src/assets/images/polygon.webp.png",
    webp: "sponsors/fullmoon/webp/polygon.webp",
    link: polygon,
    prize: ["$ 200", "$ 150"],
    list: "list-decimal px-3",
    key: "polygon",
  },
  {
    desc: [
      "$50 to winning project of the hackathon (must be deployed on Replit)",
      "Replit schwags to 5 eligible submissions deployed on Replit",
      "Eligibility for internship / full time role interviews at Replit",
    ],
    img: "src/assets/images/Replit.webp.png",
    webp: "sponsors/gibbous/webp/Replit.webp",
    link: replit,
    prize: ["$ 50"],
    list: "list-decimal px-3",
    key: "replit",
  },
  {
    desc: [
      "₹20,000 for best use of IPFS and/or Filecoin built at Devfolio-powered community Hackathons",
      "Microgrants up to 5000 USD, open grants up to 50,000 USD ",
    ],
    img: "src/assets/images/filecoin.webp.png",
    webp: "src/assets/images/filecoin.webp.png",
    link: filecoin,
    prize: ["$ 250"],
    list: "list-decimal px-3",
    key: "filecoin",
  },
  {
    desc: [
      "A bounty of 10,000 INR for the best hacks built on 5ire",
      "The swag-kit will be provided to anyone who builds on 5ire during the hackathon. (even if they don’t win the track prize!)",
      "The winners will also get an opportunity to apply for internships or full-time roles at 5ireLabs.",
    ],
    img: "src/assets/images/5ire.webp.png",
    webp: "sponsors/fullmoon/webp/5ire.webp",
    link: fire,
    prize: ["$ 250"],
    list: "list-decimal px-3",
    key: "5ire",
  },
  {
    desc: [
      "Upto $USDC 850 up for grabs, for the best hack built on top of Solana Blockchain at Devfolio-powered community Hackathons",
    ],
    img: "src/assets/images/solana.webp.png",
    webp: "sponsors/gibbous/webp/solana.webp",
    link: solana,
    prize: ["$ 500", "$ 250", "$ 100"],
    list: "list-decimal px-3",
    key: "solana",
  },
];
