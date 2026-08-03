import { KubernetesEvent, EventFilters  } from "@/types/event";
import { api } from "@/lib/api/client";

const EVENTS_API = api.events;

export async function getEvents(
    filters: EventFilters = {}
): Promise<KubernetesEvent[]> {

    const params = new URLSearchParams();

    if (filters.namespace) {
        params.set("namespace", filters.namespace);
    }

    if (filters.type) {
        params.set("type", filters.type);
    }

    if (filters.limit) {
        params.set("limit", filters.limit.toString());
    }

    const url = params.toString()
        ? `${EVENTS_API}?${params.toString()}`
        : EVENTS_API;

    const response = await fetch(url, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Events API unavailable");
    }

    return response.json();
}
