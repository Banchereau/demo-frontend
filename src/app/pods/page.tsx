import { getPods } from "@/lib/api/pods";

export default async function PodsPage() {
  const pods = await getPods();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Kubernetes Pods
        </h1>

        <p className="text-muted-foreground">
          Running workloads across the cluster
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted">
            <tr>
              <th className="px-4 py-3 text-left">
                Namespace
              </th>

              <th className="px-4 py-3 text-left">
                Pod
              </th>

              <th className="px-4 py-3 text-left">
                Status
              </th>

              <th className="px-4 py-3 text-left">
                Restarts
              </th>

              <th className="px-4 py-3 text-left">
                Node
              </th>

              <th className="px-4 py-3 text-left">
                Age
              </th>
            </tr>
          </thead>

          <tbody>
            {pods.map((pod) => (
              <tr
                key={`${pod.namespace}-${pod.name}`}
                className="border-b"
              >
                <td className="px-4 py-3">
                  {pod.namespace}
                </td>

                <td className="px-4 py-3 font-medium">
                  {pod.name}
                </td>

                <td className="px-4 py-3">
                  {pod.status}
                </td>

                <td className="px-4 py-3">
                  {pod.restarts}
                </td>

                <td className="px-4 py-3">
                  {pod.node}
                </td>

                <td className="px-4 py-3">
                  {pod.age}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
