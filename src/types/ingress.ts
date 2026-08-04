export interface KubernetesIngress {
  namespace: string;
  name: string;
  hosts: string[];
  service: string;
  tls_secret: string;
}
