import { config } from "@/lib/config";
import type { KubernetesApplication, ApplicationDetail, } from "@/types/application";


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

export async function getApplicationDetail(
  namespace: string,
  name: string
): Promise<ApplicationDetail> {

  const response = await fetch(
    `${config.backendApi}/applications/${namespace}/${name}`,
    {
      cache: "no-store",
    }
  );


  if (!response.ok) {
    throw new Error(
      "Application detail API unavailable"
    );
  }


  return response.json();
}
