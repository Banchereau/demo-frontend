export interface KubernetesEvent {
  namespace: string;
  name: string;
  type: string;
  reason: string;
  message: string;
  involved_object: string;
  timestamp: string;
}

export interface EventFilters {
  namespace?: string;
  type?: string;
  limit?: number;
}
