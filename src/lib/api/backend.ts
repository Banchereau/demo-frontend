import { BackendStatus } from "@/types/backend";
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
