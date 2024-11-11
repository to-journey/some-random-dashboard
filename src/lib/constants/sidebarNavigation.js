import DashboardIcon from "@mui/icons-material/Dashboard"
import BarChartIcon from "@mui/icons-material/BarChart"
import DescriptionIcon from "@mui/icons-material/Description"
import LayersIcon from "@mui/icons-material/Layers"


const NAVIGATION = [
  {
    segment: "dashboard",
    title: "User Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "dashboard",
    title: "Menu 1",
    icon: <LayersIcon />,
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
    segment: "dashboard",
    title: "Menu 2",
    icon: <LayersIcon />,
    children: [
      {
        segment: "chart",
        title: "Chart title",
        icon: <BarChartIcon />,
      },
      {
        segment: "stats",
        title: "Stats title",
        icon: <BarChartIcon />,
      },
    ],
  },
]

export { NAVIGATION }
