export type KubernetesApplicationStatus =
  | "healthy"
  | "unhealthy";


export interface KubernetesApplication {
  name: string;
  namespace: string;

  ingress: string | null;
  hosts: string[];

  service: string | null;
  deployment: string;

  desired_replicas: number;
  ready_replicas: number;

  pods: string[];

  certificate: string | null;

  status: KubernetesApplicationStatus;
}
