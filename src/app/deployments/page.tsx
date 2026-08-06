import { getDeployments } from "@/lib/api/deployments";

export default async function DeploymentsPage() {
  const deployments = await getDeployments();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">
        Kubernetes Deployments
      </h1>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full border">
          <thead className="border-b bg-muted">
            <tr className="border-b">
              <th className="px-4 py-3 text-left">
                Namespace
              </th>

              <th className="px-4 py-3 text-left">
                Deployment
              </th>

              <th className="px-4 py-3 text-left">
                Replicas
              </th>

              <th className="px-4 py-3 text-left">
                Ready
              </th>

              <th className="px-4 py-3 text-left">
                Available
              </th>

              <th className="px-4 py-3 text-left">
                Strategy
              </th>

              <th className="px-4 py-3 text-left">
                Images
              </th>
            </tr>
          </thead>

          <tbody>
            {deployments.map((deployment) => (
              <tr
                key={`${deployment.namespace}-${deployment.name}`}
                className="border-b"
              >
                <td className="px-4 py-3">
                  {deployment.namespace}
                </td>

                <td className="px-4 py-3 font-medium">
                  {deployment.name}
                </td>

                <td className="px-4 py-3">
                  {deployment.replicas}
                </td>

                <td className="px-4 py-3">
                  {deployment.ready_replicas}
                </td>

                <td className="px-4 py-3">
                  {deployment.available_replicas}
                </td>

                <td className="px-4 py-3">
                  {deployment.strategy}
                </td>

                <td className="px-4 py-3">
                  {deployment.images}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
