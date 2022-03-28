import Media from "../assets/images/dpc-media-highlight.webp";
import MediaDemo from "../assets/images/dpc-media-highlight-demo.webp";
import PartnerLogo from "../assets/images/ShrimpSocietyLogo.svg";
import DPCLogo from "../assets/images/DPC-logo.svg";
import Player1img from "../assets/images/player-1.webp";
import Player2img from "../assets/images/player-2.webp";
import Player3img from "../assets/images/player-3.webp";
import Player4img from "../assets/images/player-4.webp";
import Player5img from "../assets/images/player-5.webp";

export const view1 = {
  hero: {
    title: "Player name",
    score: "Rarity score",
    listvalue: "X.XXX SOL",
    image: { heroImage: Media },
    buttonA: "Update listing",
    buttonB: "Remove listing",
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
    name: "Player Name 1",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 100.0,
    average: 100.0,
  },
  {
    id: 2,
    image: { cardImage: Player2img },
    name: "Player Name 2",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 125.0,
    average: 125.0,
  },
  {
    id: 3,
    image: { cardImage: Player3img },
    name: "Player Name 3",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 150.0,
    average: 150.0,
  },
  {
    id: 4,
    image: { cardImage: Player4img },
    name: "Player Name 4",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 175.0,
    average: 175.0,
  },
];

export const view2 = {
  hero: {
    title: "Mint Your Own Custom Card",
    score: "Mint a custom Digital Player Card of yourself or as a gift! ",
    listvalue: "X.XXX SOL",
    image: { heroImage: MediaDemo },
    buttonA: "Mint Custom Card",
  },
  instructions: {
    title: "Instructions",
    subtitle: "Contact us:",
    subtitleText: "Email@email.com",
    image: DPCLogo,
    description:
      "Send us your best action and/or posing shots and videos and we will create a custom Digital Player Card for you!\n\nTo create your custom card, we will need photo(s) and clip(s) for your highlight video. **You can either email us the files** with your order number, **or attach them in the form below**.\n\nAfter checkout, you will receive a placeholder NFT while we create your custom card. You will receive a confirmation email and updates regarding your order. You will be notified once your custom card is ready and updated.\n\nReview period/cost of alterations/other terms, accept terms section? Estimated turnaround time.",
  },
};

export const view3 = {
  filters: [
    {
      id: 1,
      title: "Tier",
      group: [
        { id: "1", name: "Platinum" },
        { id: "2", name: "Gold" },
        { id: "3", name: "Silver" },
        { id: "4", name: "Basic Elite" },
      ],
    },
    {
      id: 2,
      title: "Sport",
      group: [
        { id: "1", name: "Football" },
        { id: "2", name: "Basketball" },
        { id: "3", name: "Water Polo" },
        { id: "4", name: "Boxing" },
      ],
    },
  ],
};

export const playerSlider = [
  {
    id: "1",
    image: { cardImage: Player1img },
    name: "Player Name 1",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 100.0,
    average: 100.0,
  },
  {
    id: "2",
    image: { cardImage: Player2img },
    name: "Player Name 2",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 125.0,
    average: 125.0,
  },
  {
    id: "3",
    image: { cardImage: Player3img },
    name: "Player Name 3",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 150.0,
    average: 150.0,
  },
  {
    id: "4",
    image: { cardImage: Player4img },
    name: "Player Name 4",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 175.0,
    average: 175.0,
  },
  {
    id: "5",
    image: { cardImage: Player5img },
    name: "Player Name 5",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 200.0,
    average: 200.0,
  },
];

export const playerQuery = [
  {
    id: "1",
    image: { cardImage: Player1img },
    name: "Player Name 1",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 100.0,
    average: 100.0,
  },
  {
    id: "2",
    image: { cardImage: Player2img },
    name: "Player Name 2",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 125.0,
    average: 125.0,
  },
  {
    id: "3",
    image: { cardImage: Player3img },
    name: "Player Name 3",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 150.0,
    average: 150.0,
  },
  {
    id: "4",
    image: { cardImage: Player4img },
    name: "Player Name 4",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 175.0,
    average: 175.0,
  },
  {
    id: "5",
    image: { cardImage: Player5img },
    name: "Player Name 5",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 200.0,
    average: 200.0,
  },
  {
    id: "6",
    image: { cardImage: Player1img },
    name: "Player Name 1",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 100.0,
    average: 100.0,
  },
  {
    id: "7",
    image: { cardImage: Player2img },
    name: "Player Name 2",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 125.0,
    average: 125.0,
  },
  {
    id: "8",
    image: { cardImage: Player3img },
    name: "Player Name 3",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 150.0,
    average: 150.0,
  },
  {
    id: "9",
    image: { cardImage: Player1img },
    name: "Player Name 1",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 100.0,
    average: 100.0,
  },
  {
    id: "10",
    image: { cardImage: Player2img },
    name: "Player Name 2",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 125.0,
    average: 125.0,
  },
  {
    id: "11",
    image: { cardImage: Player3img },
    name: "Player Name 3",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 150.0,
    average: 150.0,
  },
  {
    id: "12",
    image: { cardImage: Player4img },
    name: "Player Name 4",
    league: "College",
    level: "Pro",
    tier: "Lowest Ask",
    value: 175.0,
    average: 175.0,
  },
];
