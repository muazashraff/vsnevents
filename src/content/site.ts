export const site = {
  name: "VSN Events",
  legalName: "VSN Events",
  originStory:
    "Started in 2010 as Sophisticakesbysana, specialising in cupcakes and cakes — has since grown into a full-service event decor company covering florals, baked goods, and event decor.",
  established: 2010,
  address: {
    line1: "106 Listerhills Road",
    city: "Bradford",
    postcode: "BD7 1JR",
    full: "106 Listerhills Road, Bradford, BD7 1JR",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=106+Listerhills+Road+Bradford+BD7+1JR",
  },
  phone: {
    display: "07544 434441",
    tel: "+447544434441",
    whatsapp: "447544434441",
  },
  email: "vsnevents@mail.com",
  instagram: {
    handle: "@vsnevents_",
    url: "https://instagram.com/vsnevents_",
    followers: "32.1K",
    followersShort: "32K+",
    posts: "1,800",
    bio: "Gift shop / Florals • Baked Goods • Event Decor / Family-run business",
  },
  hours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "11am – 8pm" },
    { day: "Wednesday", hours: "11am – 8pm" },
    { day: "Thursday", hours: "11am – 8pm" },
    { day: "Friday", hours: "10am – 9pm" },
    { day: "Saturday", hours: "10am – 9pm" },
    { day: "Sunday", hours: "11am – 5pm" },
  ],
} as const;
