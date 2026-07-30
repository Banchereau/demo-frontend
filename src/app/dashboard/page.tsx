import { StatCard } from "@/components/dashboard/stat-card";
import { getClusterStatus } from "@/lib/api/cluster";
import { getBackendStatus } from "@/lib/api/backend";

export default async function DashboardPage() {
  const [cluster, backend] = await Promise.all([
    getClusterStatus(),
    getBackendStatus(),
  ]);


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
        <h2 className="text-xl font-semibold">
          Cluster status
        </h2>

        <p className="mt-2">
          Version: {cluster.version}
        </p>

        <p>
          Health: {cluster.health}
        </p>
      </div>

      <div className="rounded-lg border p-4">
        <h2 className="text-xl font-semibold">
          Backend API
        </h2>

        <p className="mt-2">
          Application: {backend.application}
        </p>

        <p>
          Status: {backend.status}
        </p>

        <p>
          Version: {backend.version}
        </p>

        <p>
          Message: {backend.message}
        </p>
      </div>
    </div>
  );
}
