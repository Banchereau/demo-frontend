export type ClusterHealth =
  | "healthy"
  | "warning"
  | "error";

export interface ClusterStatus {
  nodes: number;
  pods: number;
  services: number;
  namespaces: number;
  health: ClusterHealth;
}
