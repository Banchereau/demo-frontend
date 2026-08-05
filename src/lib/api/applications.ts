import { config } from "@/lib/config";
import type { KubernetesApplication } from "@/types/application";


export async function getApplications(): Promise<KubernetesApplication[]> {
  const response = await fetch(
    `${config.backendApi}/applications`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Applications API unavailable"
    );
  }

  return response.json();
}
