import { getEvents } from "@/lib/api/events";
import { getNamespaces } from "@/lib/api/namespaces";

interface EventsPageProps {
  searchParams: Promise<{
    namespace?: string;
    type?: string;
    limit?: string;
  }>;
}

export default async function EventsPage({
  searchParams,
}: EventsPageProps) {
  const params = await searchParams;

  const namespaceResponse = await getNamespaces();
  const namespaces = namespaceResponse.namespaces;
  
  const events = await getEvents({
    namespace: params.namespace,
    type: params.type,
    limit: params.limit ? Number(params.limit) : undefined,
  });

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Kubernetes Events
        </h1>

        <p className="text-muted-foreground">
          Recent cluster events
        </p>
      </div>


      <form
        method="GET"
        className="flex flex-wrap gap-4 rounded-lg border p-4"
      >
        <select
          name="namespace"
          defaultValue={params.namespace ?? ""}
          className="rounded-md border px-3 py-2"
        >
          <option value="">
            All namespaces
          </option>

          {namespaces.map((namespace) => (
            <option
              key={namespace.name}
              value={namespace.name}
            >
              {namespace.name}
            </option>
          ))}
        </select>

        <select
          name="type"
          defaultValue={params.type ?? ""}
          className="rounded-md border px-3 py-2"
        >
          <option value="">
            All types
          </option>

          <option value="Normal">
            Normal
          </option>

          <option value="Warning">
            Warning
          </option>
        </select>


        <select
          name="limit"
          defaultValue={params.limit ?? "50"}
          className="rounded-md border px-3 py-2"
        >
          <option value="25">
            25 events
          </option>

          <option value="50">
            50 events
          </option>

          <option value="100">
            100 events
          </option>

          <option value="200">
            200 events
          </option>
        </select>


        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
        >
          Filter
        </button>

      </form>


      <div className="overflow-x-auto rounded-lg border">

        <table className="w-full text-sm">

          <thead className="border-b bg-muted">

            <tr>

              <th className="px-4 py-3 text-left">
                Namespace
              </th>

              <th className="px-4 py-3 text-left">
                Type
              </th>

              <th className="px-4 py-3 text-left">
                Reason
              </th>

              <th className="px-4 py-3 text-left">
                Object
              </th>

              <th className="px-4 py-3 text-left">
                Message
              </th>

            </tr>

          </thead>


          <tbody>

            {events.map((event) => (

              <tr
                key={`${event.namespace}-${event.name}`}
                className="border-b"
              >

                <td className="px-4 py-3">
                  {event.namespace}
                </td>


                <td className="px-4 py-3">
                  {event.type}
                </td>


                <td className="px-4 py-3">
                  {event.reason}
                </td>


                <td className="px-4 py-3">
                  {event.involved_object}
                </td>


                <td className="px-4 py-3">
                  {event.message}
                </td>

              </tr>

            ))}


            {events.length === 0 && (

              <tr>

                <td
                  colSpan={5}
                  className="px-4 py-6 text-center text-muted-foreground"
                >
                  No events found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}
