import Link from "next/link";
import {
  LayoutDashboard,
  Boxes,
  Network,
  ShieldCheck,
  Activity,
  Settings,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Pods",
    icon: Boxes,
  },
  {
    name: "Services",
    icon: Network,
  },
  {
    name: "Certificates",
    icon: ShieldCheck,
  },
  {
    name: "Monitoring",
    icon: Activity,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

export function Sidebar() {
  return (
    <aside className="hidden h-screen w-64 border-r bg-background md:block">
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-lg font-semibold">
          XCodeWhisperer
        </h1>
      </div>

      <nav className="space-y-1 p-4">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={
                item.name === "Dashboard"
                  ? "/dashboard"
                  : "#"
              }
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-muted"
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
