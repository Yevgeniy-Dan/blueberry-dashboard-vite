const todays = [
  {
    id: "1",
    date: "2024-04-22T17:08:18.204+03:00",
    time: "2024-04-19T17:08:18.205+03:00",
    customerName: "Salvador Huel",
    staff: "Dino Kuvalis",
    service: "Sleek Granite Pizza",
    status: "Pending",
  },
  {
    id: "2",
    date: "2024-04-19T17:08:18.205+03:00",
    time: "2024-04-19T17:08:18.205+03:00",
    customerName: "Madilyn Barrows",
    staff: "Karolann Bailey",
    service: "Bespoke Metal Table",
    status: "No-Show",
  },
  {
    id: "3",
    date: "2024-04-21T17:08:18.205+03:00",
    time: "2024-04-19T17:08:18.205+03:00",
    customerName: "Ellen Bernhard-Hilll",
    staff: "Bret Zboncak",
    service: "Awesome Concrete Towels",
    status: "Pending",
  },
  {
    id: "4",
    date: "2024-04-20T17:08:18.206+03:00",
    time: "2024-04-19T17:08:18.206+03:00",
    customerName: "Baby Thiel",
    staff: "Johann Jacobson",
    service: "Recycled Plastic Chips",
    status: "Done",
  },
  {
    id: "5",
    date: "2024-04-20T17:08:18.206+03:00",
    time: "2024-04-19T17:08:18.206+03:00",
    customerName: "Bridgette Yundt",
    staff: "Mozelle Emmerich",
    service: "Electronic Cotton Car",
    status: "Pending",
  },
  {
    id: "6",
    date: "2024-04-19T17:08:18.206+03:00",
    time: "2024-04-19T17:08:18.206+03:00",
    customerName: "Josue Gerlach-Jacobson",
    staff: "Cristopher Jast",
    service: "Handmade Frozen Bacon",
    status: "Confirmed",
  },
  {
    id: "7",
    date: "2024-04-22T17:08:18.206+03:00",
    time: "2024-04-19T17:08:18.206+03:00",
    customerName: "Ernest D&#x27;Amore-Ortiz",
    staff: "Weston Considine",
    service: "Tasty Frozen Chair",
    status: "Canceled",
  },
  {
    id: "8",
    date: "2024-04-21T17:08:18.206+03:00",
    time: "2024-04-19T17:08:18.206+03:00",
    customerName: "Abbigail Kemmer",
    staff: "Dewitt Volkman",
    service: "Generic Steel Chicken",
    status: "Pending",
  },
  {
    id: "9",
    date: "2024-04-19T17:08:18.206+03:00",
    time: "2024-04-19T17:08:18.206+03:00",
    customerName: "Molly Rolfson",
    staff: "Hiram Raynor",
    service: "Recycled Steel Pants",
    status: "Done",
  },
  {
    id: "10",
    date: "2024-04-22T17:08:18.206+03:00",
    time: "2024-04-19T17:08:18.206+03:00",
    customerName: "Kenya Collier",
    staff: "Cristal Schumm",
    service: "Sleek Frozen Pizza",
    status: "Confirmed",
  },
];

const tomorrows = [
  {
    id: "11",
    date: "2024-04-19T17:08:18.206+03:00",
    time: "2024-04-19T17:08:18.207+03:00",
    customerName: "Leone Gibson",
    staff: "Brandyn Brown",
    service: "Sleek Cotton Shirt",
    status: "Pending",
  },
  {
    id: "12",
    date: "2024-04-22T17:08:18.207+03:00",
    time: "2024-04-19T17:08:18.207+03:00",
    customerName: "Emely Klocko",
    staff: "Martina Larson",
    service: "Awesome Wooden Ball",
    status: "No-Show",
  },
  {
    id: "13",
    date: "2024-04-20T17:08:18.207+03:00",
    time: "2024-04-19T17:08:18.207+03:00",
    customerName: "Jordan Lind",
    staff: "Elton Denesik",
    service: "Handcrafted Cotton Shoes",
    status: "No-Show",
  },
  {
    id: "14",
    date: "2024-04-22T17:08:18.207+03:00",
    time: "2024-04-19T17:08:18.207+03:00",
    customerName: "Doris Larson",
    staff: "Elise Legros",
    service: "Fantastic Metal Ball",
    status: "Canceled",
  },
  {
    id: "15",
    date: "2024-04-19T17:08:18.207+03:00",
    time: "2024-04-19T17:08:18.207+03:00",
    customerName: "Jennifer Prohaska",
    staff: "Sigmund Padberg",
    service: "Intelligent Concrete Car",
    status: "Confirmed",
  },
  {
    id: "16",
    date: "2024-04-22T17:08:18.207+03:00",
    time: "2024-04-19T17:08:18.207+03:00",
    customerName: "Roman Effertz",
    staff: "Magnolia Homenick",
    service: "Small Cotton Chips",
    status: "Done",
  },
  {
    id: "17",
    date: "2024-04-19T17:08:18.207+03:00",
    time: "2024-04-19T17:08:18.207+03:00",
    customerName: "Wilfrid Erdman",
    staff: "Hermann Koss",
    service: "Tasty Concrete Chicken",
    status: "Done",
  },
  {
    id: "18",
    date: "2024-04-21T17:08:18.207+03:00",
    time: "2024-04-19T17:08:18.207+03:00",
    customerName: "Summer Effertz",
    staff: "Maximillia Durgan",
    service: "Ergonomic Wooden Towels",
    status: "Confirmed",
  },
  {
    id: "19",
    date: "2024-04-22T17:08:18.207+03:00",
    time: "2024-04-19T17:08:18.207+03:00",
    customerName: "Gunner Bogan",
    staff: "Delphine Johns",
    service: "Sleek Bronze Bike",
    status: "Pending",
  },
  {
    id: "20",
    date: "2024-04-22T17:08:18.207+03:00",
    time: "2024-04-19T17:08:18.207+03:00",
    customerName: "Reta Bahringer",
    staff: "Janick Kutch",
    service: "Recycled Cotton Pants",
    status: "No-Show",
  },
];

export { todays, tomorrows };
