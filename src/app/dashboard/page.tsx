import { StatCard } from "@/components/dashboard/stat-card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Kubernetes Dashboard
        </h1>

        <p className="text-muted-foreground">
          Cluster overview and platform status
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Nodes"
          value={1}
        />

        <StatCard
          title="Pods"
          value={12}
        />

        <StatCard
          title="Services"
          value={8}
        />

        <StatCard
          title="Certificates"
          value={5}
        />
      </div>
    </div>
  );
}
