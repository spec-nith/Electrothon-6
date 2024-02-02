import { gg, parth } from "../../assets/images";
 


const events = [
 
  {
    name: "AlgoSorcerers",
    img:  gg,
    desc: "As the days in the almanac📜 approach the advent of some real sorcery🪄, ELECTROTHON 6.0 brings to you AlgoSorcerers🔮 in collaboration with GeeksforGeeks.So get set to crack the code and make sense of mystic chaos with your wizardly algorithms.",
    startingDate: "2024-02-03",
    endingDate: "2024-02-03 23:59:00",
    link: "https://practice.geeksforgeeks.org/contest/algosorcerers"
  },
]

const currentDate = new Date();

export const liveEvents = events.filter(event => {
  const eventEndDate = new Date(event.endingDate);
  return eventEndDate > currentDate;
});

export const UpcomingEvents = liveEvents.filter(event => {
  const eventStartDate = new Date(event.startingDate);
  return eventStartDate > currentDate;
});

export const pastEvents = events.filter(event => {
  const eventEndDate = new Date(event.endingDate);
  return eventEndDate < currentDate;
});

