import { KubernetesService } from "@/types/service";

const BACKEND_URL =
  process.env.BACKEND_API ??
  "http://demo-backend.default.svc.cluster.local";

export async function getServices(): Promise<KubernetesService[]> {
  const response = await fetch(
    `${BACKEND_URL}/services`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Services API unavailable");
  }

  return response.json();
}
