import DashboardIcon from "@mui/icons-material/Dashboard"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import BarChartIcon from "@mui/icons-material/BarChart"
import DescriptionIcon from "@mui/icons-material/Description"
import LayersIcon from "@mui/icons-material/Layers"


const NAVIGATION = [
  {
    segment: "dashboard",
    title: "User Dashboard",
  },
  {
    segment: "dashboard",
    title: "Menu 1",
    children: [
      {
        segment: "sales",
        title: "Sales title",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic title",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "reports",
    title: "Menu 2",
    children: [
      {
        segment: "chart",
        title: "Chart title",
        icon: <DescriptionIcon />,
      },
      {
        segment: "stats",
        title: "Stats title",
        icon: <DescriptionIcon />,
      },
    ],
  },
]

export { NAVIGATION }
