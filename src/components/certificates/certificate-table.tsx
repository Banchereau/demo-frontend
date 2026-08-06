import type { KubernetesCertificate } from "@/types/certificate";
import { CertificateStatusBadge } from "./certificate-status-badge";
import { ExpirationBadge } from "./expiration-badge";

interface Props {
  certificates: KubernetesCertificate[];
}

export function CertificateTable({
  certificates,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead className="border-b bg-muted">
          <tr className="border-b">
            <th className="px-4 py-3 text-left">
              Namespace
            </th>

            <th className="px-4 py-3 text-left">
              Certificate
            </th>

            <th className="px-4 py-3 text-left">
              Domains
            </th>

            <th className="px-4 py-3 text-left">
              Issuer
            </th>

            <th className="px-4 py-3 text-left">
              Status
            </th>

            <th className="px-4 py-3 text-left">
              Expiration
            </th>
          </tr>
        </thead>

        <tbody>
          {certificates.map((certificate) => (
            <tr
              key={`${certificate.namespace}-${certificate.name}`}
              className="border-b"
            >
              <td className="px-4 py-3">
                {certificate.namespace}
              </td>

              <td className="px-4 py-3">
                {certificate.name}
              </td>

              <td className="px-4 py-3">
                {certificate.dns_names.join(", ")}
              </td>

              <td className="px-4 py-3">
                {certificate.issuer}
              </td>

              <td className="px-4 py-3">
                <CertificateStatusBadge
                  ready={certificate.ready}
                />
              </td>

              <td className="px-4 py-3">
                <ExpirationBadge
                  expiration={certificate.not_after}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
