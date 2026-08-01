import { Pod } from "@/types/pod";
import { config } from "@/lib/config";

const PODS_API = config.clusterApi.replace(
  "/cluster",
  "/pods"
);

export async function getPods(): Promise<Pod[]> {
  const response = await fetch(PODS_API, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Pods API unavailable");
  }

  return response.json();
}
