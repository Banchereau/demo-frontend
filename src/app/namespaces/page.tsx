import { getNamespaces } from "@/lib/api/namespaces";


export default async function NamespacesPage() {

  const data = await getNamespaces();

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">
        Kubernetes Namespaces
      </h1>

      <div className="rounded-lg border">

        <table className="w-full">

          <thead>
            <tr className="border-b text-left">

              <th className="p-3">
                Namespace
              </th>

              <th className="p-3">
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

                <td className="p-3">
                  {namespace.name}
                </td>

                <td className="p-3">
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
