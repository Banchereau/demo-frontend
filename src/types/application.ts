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

export interface ApplicationDeploymentDetail {
  name: string;
  desired_replicas: number;
  ready_replicas: number;
  image: string | null;
}


export interface ApplicationServiceDetail {
  name: string;
  type: string | null;
  cluster_ip: string | null;
}


export interface ApplicationIngressDetail {
  name: string;
  hosts: string[];
  tls: boolean;
}


export interface ApplicationPodDetail {
  name: string;
  status: string;
  restarts: number;
}


export interface ApplicationCertificateDetail {
  name: string;
  ready: boolean;
  expiration: string | null;
}


export interface ApplicationDetail {
  name: string;
  namespace: string;

  status: KubernetesApplicationStatus;

  deployment: ApplicationDeploymentDetail | null;

  service: ApplicationServiceDetail | null;

  ingress: ApplicationIngressDetail | null;

  pods: ApplicationPodDetail[];

  certificates: ApplicationCertificateDetail[];
}
