import { DashboardConfig } from "@/server/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "FAQ",
      href: "/dashboard/support",
    },
    {
      title: "Support",
      href: "/dashboard/support",
    },
  ],
  sidebarNav: [
    {
      title: "Database",
      href: "/dashboard",
      icon: "database",
    },
    {
      title: "Add Company",
      href: "/dashboard/addcompany",
      icon: "copyplus",
    },
    // {
    //   title: "Reports",
    //   href: "/dashboard/reports",
    //   icon: "post",
    // },
    // {
    //   title: "Upcoming",
    //   href: "/dashboard/upcoming",
    //   icon: "calendarclock",
    // },
    // {
    //   title: "Calendar",
    //   href: "/dashboard/calendar",
    //   icon: "calendar",
    // },
    // {
    //   title: "Tasks",
    //   href: "/dashboard/tasks",
    //   icon: "alarm",
    // },
    // {
    //   title: "Emails",
    //   href: "/dashboard/emails",
    //   icon: "Mail",
    // },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
