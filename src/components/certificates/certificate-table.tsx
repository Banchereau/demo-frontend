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
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b">
          <th className="p-2 text-left">
            Namespace
          </th>

          <th className="p-2 text-left">
            Certificate
          </th>

          <th className="p-2 text-left">
            Domains
          </th>

          <th className="p-2 text-left">
            Issuer
          </th>

          <th className="p-2 text-left">
            Status
          </th>

          <th className="p-2 text-left">
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
            <td className="p-2">
              {certificate.namespace}
            </td>

            <td className="p-2">
              {certificate.name}
            </td>

            <td className="p-2">
              {certificate.dns_names.join(", ")}
            </td>

            <td className="p-2">
              {certificate.issuer}
            </td>

            <td className="p-2">
              <CertificateStatusBadge
                ready={certificate.ready}
              />
            </td>

            <td className="p-2">
              <ExpirationBadge
                expiration={certificate.not_after}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
