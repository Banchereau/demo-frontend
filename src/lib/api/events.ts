import { KubernetesEvent } from "@/types/event";
import { config } from "@/lib/config";

const EVENTS_API = config.clusterApi.replace(
  "/cluster",
  "/events"
);

export async function getEvents(): Promise<KubernetesEvent[]> {
  const response = await fetch(EVENTS_API, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Events API unavailable");
  }

  return response.json();
}
