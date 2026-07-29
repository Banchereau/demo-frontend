export type CertificateStatus =
  | "Ready"
  | "Pending"
  | "Failed";

export interface KubernetesCertificate {
  name: string;
  namespace: string;
  issuer: string;
  status: CertificateStatus;
  expirationDate: string;
}
