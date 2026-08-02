export type KubernetesServiceType =
  | "ClusterIP"
  | "NodePort"
  | "LoadBalancer"
  | "ExternalName";

export interface KubernetesService {
  name: string;
  namespace: string;
  type: KubernetesServiceType;
  cluster_ip: string;
  ports: string;
}
