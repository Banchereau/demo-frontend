import { BackendStatus } from "@/types/backend";
import { PlatformHealth } from "@/types/health";
import { config } from "@/lib/config";

export async function getBackendStatus(): Promise<BackendStatus> {
  const response = await fetch(config.backendApi, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Backend API unavailable");
  }

  return response.json();
}

export async function getPlatformHealth(): Promise<PlatformHealth> {
  const response = await fetch(
    `${config.backendApi}/health/platform`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Unable to fetch platform health");
  }

  return response.json();
}
