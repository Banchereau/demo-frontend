import { Pod } from "@/types/pod";
import { PodLogsResponse } from "@/types/pod-log";
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

export async function getPodLogs(
  namespace: string,
  pod: string,
  options?: {
    tail?: number;
    timestamps?: boolean;
    previous?: boolean;
    container?: string;
  }
): Promise<PodLogsResponse> {

  const params = new URLSearchParams();

  if (options?.tail !== undefined) {
    params.set("tail", options.tail.toString());
  }

  if (options?.timestamps !== undefined) {
    params.set("timestamps", options.timestamps.toString());
  }

  if (options?.previous !== undefined) {
    params.set("previous", options.previous.toString());
  }

  if (options?.container) {
    params.set("container", options.container);
  }

  const query = params.toString();

  const url =
    `${PODS_API}/${namespace}/${pod}/logs` +
    (query ? `?${query}` : "");

  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Pod logs API unavailable");
  }

  return response.json();
}
