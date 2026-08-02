import { config } from "@/lib/config";
import type { KubernetesDeployment } from "@/types/deployment";


export async function getDeployments(): Promise<KubernetesDeployment[]> {
  const response = await fetch(
    `${config.backendApi}/deployments`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Deployments API unavailable"
    );
  }

  return response.json();
}
