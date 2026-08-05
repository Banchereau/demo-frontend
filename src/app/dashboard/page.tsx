import { StatCard } from "@/components/dashboard/stat-card";
import { HealthSummary } from "@/components/dashboard/health-summary";

import { getClusterStatus } from "@/lib/api/cluster";
import { getBackendStatus } from "@/lib/api/backend";

import { getApplications } from "@/lib/api/applications";
import { getDeployments } from "@/lib/api/deployments";
import { getCertificates } from "@/lib/api/certificates";
import { getIngresses } from "@/lib/api/ingresses";

export default async function DashboardPage() {
  const [
    cluster,
    backend,
    applications,
    deployments,
    certificates,
    ingresses,
  ] = await Promise.all([
    getClusterStatus(),
    getBackendStatus(),
    getApplications(),
    getDeployments(),
    getCertificates(),
    getIngresses(),
  ]);

  const healthyApplications =
    applications.filter(
      (app) => app.status === "healthy"
    ).length;

  const unhealthyApplications = applications.length - healthyApplications;

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
          title="Namespaces"
          value={cluster.namespaces}
        />

        <StatCard
          title="Applications"
          value={applications.length}
        />

        <StatCard
          title="Deployments"
          value={deployments.length}
        />

        <StatCard
          title="Certificates"
          value={certificates.length}
        />

        <StatCard
          title="Ingresses"
          value={ingresses.length}
        />
      </div>

      <HealthSummary
        healthy={healthyApplications}
        unhealthy={unhealthyApplications}
      />      

      <div className="rounded-lg border p-4">
        <h2 className="text-xl font-semibold">
          Cluster status
        </h2>

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
