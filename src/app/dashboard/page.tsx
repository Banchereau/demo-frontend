import { StatCard } from "@/components/dashboard/stat-card";
import { getClusterStatus } from "@/lib/api/cluster";

export default async function DashboardPage() {
  const cluster = await getClusterStatus();

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
          value={cluster.nodes}
        />

        <StatCard
          title="Pods"
          value={cluster.pods}
        />

        <StatCard
          title="Services"
          value={cluster.services}
        />

        <StatCard
          title="Certificates"
          value={cluster.certificates}
        />
      </div>

      <div className="rounded-lg border p-4">
        <p>
          Cluster version: {cluster.version}
        </p>

        <p>
          Status: {cluster.health}
        </p>
      </div>
    </div>
  );
}
