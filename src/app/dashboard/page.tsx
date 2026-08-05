import { StatCard } from "@/components/dashboard/stat-card";
import { HealthSummary } from "@/components/dashboard/health-summary";
import { PlatformHealth } from "@/components/dashboard/platform-health";

import { getClusterStatus } from "@/lib/api/cluster";
import { getBackendStatus } from "@/lib/api/backend";
import { getApplications } from "@/lib/api/applications";
import { getDeployments } from "@/lib/api/deployments";
import { getCertificates } from "@/lib/api/certificates";
import { getIngresses } from "@/lib/api/ingresses";
import { getPlatformHealth } from "@/lib/api/backend";

import {
  Server,
  Boxes,
  Network,
  Layers,
  Rocket,
  GitBranch,
  ShieldCheck,
  Route,
} from "lucide-react";

export default async function DashboardPage() {
  const [
    cluster,
    backend,
    applications,
    deployments,
    certificates,
    ingresses,
    platformHealth,
  ] = await Promise.all([
    getClusterStatus(),
    getBackendStatus(),
    getApplications(),
    getDeployments(),
    getCertificates(),
    getIngresses(),
    getPlatformHealth(),
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
      <PlatformHealth health={platformHealth} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Nodes"
          value={cluster.nodes}
          icon={Server}
          description="Kubernetes worker nodes"
        />

        <StatCard
          title="Pods"
          value={cluster.pods}
          icon={Boxes}
          description="Running workloads"
        />

        <StatCard
          title="Services"
          value={cluster.services}
          icon={Network}
          description="Internal Kubernetes services"
        />

        <StatCard
          title="Namespaces"
          value={cluster.namespaces}
          icon={Layers}
          description="Logical environments"
        />

        <StatCard
          title="Applications"
          value={applications.length}
          icon={Rocket}
          description="Discovered applications"
        />

        <StatCard
          title="Deployments"
          value={deployments.length}
          icon={GitBranch}
          description="Managed workloads"
        />

        <StatCard
          title="Certificates"
          value={certificates.length}
          icon={ShieldCheck}
          status="Ready"
          description="TLS certificates"
        />

        <StatCard
          title="Ingresses"
          value={ingresses.length}
          icon={Route}
          status="Active"
          description="External routes"
        />
      </div>

      <HealthSummary
        healthy={healthyApplications}
        unhealthy={unhealthyApplications}
      />      

    </div>
  );
}
