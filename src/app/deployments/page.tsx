import { getDeployments } from "@/lib/api/deployments";

export default async function DeploymentsPage() {
  const deployments = await getDeployments();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Kubernetes Deployments
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">
                Namespace
              </th>

              <th className="p-2 text-left">
                Deployment
              </th>

              <th className="p-2 text-left">
                Replicas
              </th>

              <th className="p-2 text-left">
                Ready
              </th>

              <th className="p-2 text-left">
                Available
              </th>

              <th className="p-2 text-left">
                Strategy
              </th>

              <th className="p-2 text-left">
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
                <td className="p-2">
                  {deployment.namespace}
                </td>

                <td className="p-2 font-medium">
                  {deployment.name}
                </td>

                <td className="p-2">
                  {deployment.replicas}
                </td>

                <td className="p-2">
                  {deployment.ready_replicas}
                </td>

                <td className="p-2">
                  {deployment.available_replicas}
                </td>

                <td className="p-2">
                  {deployment.strategy}
                </td>

                <td className="p-2">
                  {deployment.images}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
