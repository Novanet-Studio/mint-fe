import Media from "../assets/images/dpc-media-highlight.webp";
import PartnerLogo from "../assets/images/ShrimpSocietyLogo.svg";
import Player1img from "../assets/images/player-1.webp";
import Player2img from "../assets/images/player-2.webp";
import Player3img from "../assets/images/player-3.webp";
import Player4img from "../assets/images/player-4.webp";

export const data = {
  hero: {
    title: "Player name",
    score: "Rarity score",
    listvalue: "X.XXX SOL",
    image: { heroImage: Media },
  },
  partner: {
    title: "In Partnership With",
    subtitle: "Shrimp Society",
    subtitleText: "Founders Community",
    image: PartnerLogo,
    description:
      "Description of Partnership Untis ipsam estior audanim inciasit et laborum quos assimen imendaes vendani issus ab ilitas dit eri offic tenduci ateceaq uaesed unt re vendani hillit optat laceptat pa dis dunt pellupti as acerchic tor aut rempore stistio nsedi.",
  },
  playerBio: {
    title: "Player Bio",
    subtitle: "Player Name",
    subtitleText: "Founders Community",
    description:
      "Bio + IRL utility Untis ipsam estior audanim inciasit et laborum quos assimen imendaes vendani issus ab ilitas dit eri offic tenduci ateceaq uaesed unt re vendani hillit optat laceptat pa dis dunt pellupti as acerchic tor aut rempore stistio nsedisi mporei",
  },
  playerStats: {
    heading: "Player Stats",
    description:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  playerSales: {
    heading: "Sales History",
    description:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
};

export const players = [
  {
    id: 1,
    image: { cardImage: Player1img },
    name: "Name 1",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 100.0,
    average: 100.0,
  },
  {
    id: 2,
    image: { cardImage: Player2img },
    name: "Name 2",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 125.0,
    average: 125.0,
  },
  {
    id: 3,
    image: { cardImage: Player3img },
    name: "Name 3",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 150.0,
    average: 150.0,
  },
  {
    id: 4,
    image: { cardImage: Player4img },
    name: "Name 4",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 175.0,
    average: 175.0,
  },
];
