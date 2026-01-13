export const sidebarConfig = {
  logo: {
    icon: "account_balance_wallet",
    title: "FinanceTracker",
    subtitle: "Personal Finance",
  },
  menuItems: [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "dashboard",
      path: "/dashboard",
    },
    {
      id: "emi",
      label: "EMIs",
      icon: "credit_card",
      path: "/emi",
    },
    {
      id: "mutual-funds",
      label: "Mutual Funds",
      icon: "trending_up",
      path: "/mutual-funds",
    },
    {
      id: "goals",
      label: "Goals",
      icon: "track_changes",
      path: "/goals",
    },
    {
      id: "settings",
      label: "Settings",
      icon: "settings",
      path: "/settings",
    },
  ],
};
