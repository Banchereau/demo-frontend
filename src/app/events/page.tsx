import { getEvents } from "@/lib/api/events";

export default async function EventsPage() {
  const events = await getEvents();

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
          </tbody>
        </table>
      </div>
    </div>
  );
}
