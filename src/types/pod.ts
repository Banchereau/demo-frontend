export type PodStatus =
  | "Running"
  | "Pending"
  | "Failed"
  | "Succeeded"
  | "Unknown";

export interface Pod {
  name: string;
  namespace: string;
  status: PodStatus;
  restarts: number;
  node: string;
  age: string;
}
