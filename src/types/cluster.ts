export type ClusterHealth =
  | "healthy"
  | "warning"
  | "error";

export interface ClusterStatus {
  nodes: number;
  pods: number;
  services: number;
  certificates: number;
  health: ClusterHealth;
  version: string;
  lastUpdated: string;
}
