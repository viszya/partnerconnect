import { DashboardConfig } from "@/server/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Companies",
      href: "/dashboard",
      icon: "post",
    },
    {
      title: "Add Company",
      href: "/dashboard/addcompany",
      icon: "billing",
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
  ],
}
