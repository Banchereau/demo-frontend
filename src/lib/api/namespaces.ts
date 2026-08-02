import { config } from "@/lib/config";
import type {
  NamespaceResponse,
} from "@/types/namespace";


export async function getNamespaces() {
  const response = await fetch(
    `${config.backendApi}/namespaces`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch namespaces"
    );
  }

  const data: NamespaceResponse =
    await response.json();

  return data;
}
