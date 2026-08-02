import Link from "next/link";
import {
  LayoutDashboard,
  Boxes,
  Network,
  Layers,
  ShieldCheck,
  Activity,
  Settings,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Pods",
    href: "/pods",
    icon: Boxes,
  },
  {
    name: "Services",
    href: "/services",
    icon: Network,
  },
  {
    name: "Deployments",
    href: "/deployments",
    icon: Layers,
  },
  {
    title: "Namespaces",
    href: "/namespaces",
    icon: Boxes,
  },
  {
    name: "Certificates",
    href: "/certificates",
    icon: ShieldCheck,
  },
  {
    name: "Monitoring",
    href: "/monitoring",
    icon: Activity,
  },
  {
    name: "Settings",
    href: "/settings",
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
              href={item.href}
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
