export interface KubernetesCertificate {
  namespace: string;
  name: string;
  secret_name: string;
  dns_names: string[];
  issuer: string;
  ready: boolean;
  status: string;
  not_after: string;
}
