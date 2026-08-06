import { getServices } from "@/lib/api/services";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">
        Kubernetes Services
      </h1>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full border">
          <thead className="border-b bg-muted">
            <tr className="border-b">
              <th className="p-2 text-left">
                Namespace
              </th>
              <th className="p-2 text-left">
                Service
              </th>
              <th className="p-2 text-left">
                Type
              </th>
              <th className="p-2 text-left">
                Cluster IP
              </th>
              <th className="p-2 text-left">
                Ports
              </th>
            </tr>
          </thead>

          <tbody>
            {services.map((service) => (
              <tr
                key={`${service.namespace}-${service.name}`}
                className="border-b"
              >
                <td className="p-2">
                  {service.namespace}
                </td>

                <td className="p-2 font-medium">
                  {service.name}
                </td>

                <td className="p-2">
                  {service.type}
                </td>

                <td className="p-2">
                  {service.cluster_ip}
                </td>

                <td className="p-2">
                  {service.ports}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
