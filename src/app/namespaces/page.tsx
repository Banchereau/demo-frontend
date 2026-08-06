import { getNamespaces } from "@/lib/api/namespaces";


export default async function NamespacesPage() {

  const data = await getNamespaces();

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Kubernetes Namespaces
      </h1>

      <div className="rounded-lg border">

        <table className="w-full">

          <thead className="border-b bg-muted">
            <tr className="border-b text-left">

              <th className="px-4 py-3">
                Namespace
              </th>

              <th className="px-4 py-3">
                Status
              </th>

            </tr>
          </thead>


          <tbody>

            {data.namespaces.map(
              (namespace) => (

              <tr
                key={namespace.name}
                className="border-b"
              >

                <td className="px-4 py-3">
                  {namespace.name}
                </td>

                <td className="px-4 py-3">
                  {namespace.status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
