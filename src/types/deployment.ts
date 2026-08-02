export type KubernetesDeploymentStrategy =
  | "RollingUpdate"
  | "Recreate";


export interface KubernetesDeployment {
  name: string;
  namespace: string;
  replicas: number;
  ready_replicas: number;
  available_replicas: number;
  strategy: KubernetesDeploymentStrategy;
  images: string;
}
