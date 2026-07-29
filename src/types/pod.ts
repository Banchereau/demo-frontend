export type PodStatus =
  | "Running"
  | "Pending"
  | "Failed"
  | "Unknown";

export interface KubernetesPod {
  name: string;
  namespace: string;
  status: PodStatus;
  cpu: string;
  memory: string;
}
