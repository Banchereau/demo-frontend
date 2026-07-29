import { ClusterStatus } from "@/types/cluster";

export async function getClusterStatus(): Promise<ClusterStatus> {
  return {
    nodes: 1,
    pods: 12,
    services: 8,
    certificates: 5,
    health: "healthy",
    version: "k3s v1.36.2",
    lastUpdated: new Date().toISOString(),
  };
}
