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
      title: "View Company",
      href: "/dashboard/company",
      icon: "eye",
    },
    {
      title: "Add Company",
      href: "/dashboard/addcompany",
      icon: "copyplus",
    },
    {
      title: "Reports",
      href: "/dashboard/reports",
      icon: "post",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
    {
      title: "Support",
      href: "/dashboard/support",
      icon: "mailquestion",
    },
    {
      title: "FAQ",
      href: "/dashboard/faq",
      icon: "helpcircle",
    },
  ],
}
