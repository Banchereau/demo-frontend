import { KubernetesIngress } from "@/types/ingress";

interface IngressTableProps {
  ingresses: KubernetesIngress[];
}

export function IngressTable({
  ingresses,
}: IngressTableProps) {
  return (
    <div className="rounded-md border">

      <table className="w-full text-sm">

        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">
              Namespace
            </th>

            <th className="p-3 text-left">
              Ingress
            </th>

            <th className="p-3 text-left">
              Domains
            </th>

            <th className="p-3 text-left">
              Service
            </th>

            <th className="p-3 text-left">
              TLS Secret
            </th>
          </tr>
        </thead>

        <tbody>
          {ingresses.map((ingress) => (
            <tr
              key={`${ingress.namespace}-${ingress.name}`}
              className="border-b"
            >
              <td className="p-3">
                {ingress.namespace}
              </td>

              <td className="p-3 font-medium">
                {ingress.name}
              </td>

              <td className="p-3">
                {ingress.hosts.join(", ")}
              </td>

              <td className="p-3">
                {ingress.service}
              </td>

              <td className="p-3">
                {ingress.tls_secret}
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}
