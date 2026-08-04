import type { KubernetesCertificate } from "@/types/certificate";
import { api } from "@/lib/api/client";

const CERTIFICATES_API = api.certificates;

export async function getCertificates(): Promise<KubernetesCertificate[]> {
  const response = await fetch(CERTIFICATES_API, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Certificates API unavailable");
  }

  return response.json();
}
