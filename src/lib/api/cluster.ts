import { ClusterStatus } from "@/types/cluster";
import { config } from "@/lib/config";

export async function getClusterStatus(): Promise<ClusterStatus> {
  const response = await fetch(config.clusterApi, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Cluster API unavailable");
  }

  return response.json();
}
