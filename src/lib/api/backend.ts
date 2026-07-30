import { BackendStatus } from "@/types/backend";

const BACKEND_URL = "https://api.xcodewhisperer.fr";

export async function getBackendStatus(): Promise<BackendStatus> {
  const response = await fetch(BACKEND_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Backend API unavailable");
  }

  return response.json();
}
