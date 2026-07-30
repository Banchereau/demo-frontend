import { ClusterStatus } from "@/types/cluster";

const BACKEND_URL =
  "http://demo-backend.default.svc.cluster.local/cluster";

export async function getClusterStatus(): Promise<ClusterStatus> {
  const response = await fetch(
    BACKEND_URL,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Cluster API unavailable"
    );
  }

  return response.json();
}
