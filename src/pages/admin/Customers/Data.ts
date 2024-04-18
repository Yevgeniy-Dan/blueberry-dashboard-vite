interface customerData {
  total: number;
  pageSize: number;
  customers: { avatar: string }[];
}

export const users: customerData = {
  pageSize: 10,
  total: 23,
  customers: [
    { avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
    { avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    { avatar: "https://randomuser.me/api/portraits/women/84.jpg" },
    { avatar: "https://randomuser.me/api/portraits/men/15.jpg" },
    { avatar: "https://randomuser.me/api/portraits/men/79.jpg" },
    { avatar: "https://randomuser.me/api/portraits/women/34.jpg" },
    { avatar: "https://randomuser.me/api/portraits/women/64.jpg" },
    { avatar: "https://randomuser.me/api/portraits/men/16.jpg" },
    { avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
    { avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
    { avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
    { avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
    { avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
    { avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
    { avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
    { avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
    { avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
    { avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
    { avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
    { avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
    { avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
    { avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
  ],
};
