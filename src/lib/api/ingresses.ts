import { KubernetesIngress } from "@/types/ingress";
import { api } from "@/lib/api/client";

const INGRESSES_API = api.ingresses;

export async function getIngresses(): Promise<KubernetesIngress[]> {

  const response = await fetch(INGRESSES_API, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Ingress API unavailable");
  }

  return response.json();
}
