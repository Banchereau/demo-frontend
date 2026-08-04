import { getCertificates } from "@/lib/api/certificates";
import { CertificateTable } from "@/components/certificates/certificate-table";

export default async function CertificatesPage() {
  const certificates = await getCertificates();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Kubernetes Certificates
        </h1>

        <p className="text-muted-foreground">
          TLS certificates managed by cert-manager.
        </p>
      </div>

      <CertificateTable certificates={certificates} />
    </div>
  );
}
