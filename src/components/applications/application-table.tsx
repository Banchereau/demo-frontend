import Link from "next/link";

import { ApplicationStatusBadge } from "./application-status-badge";
import type { KubernetesApplication } from "@/types/application";


interface ApplicationTableProps {
  applications: KubernetesApplication[];
}


export function ApplicationTable({
  applications,
}: ApplicationTableProps) {

  return (
    <div className="rounded-md border">

      <table className="w-full text-sm">

        <thead className="border-b bg-muted">
          <tr className="border-b">

            <th className="px-4 py-3 text-left">
              Namespace
            </th>

            <th className="px-4 py-3 text-left">
              Application
            </th>

            <th className="px-4 py-3 text-left">
              Deployment
            </th>

            <th className="px-4 py-3 text-left">
              Service
            </th>

            <th className="px-4 py-3 text-left">
              Hosts
            </th>

            <th className="px-4 py-3 text-left">
              Replicas
            </th>

            <th className="px-4 py-3 text-left">
              Status
            </th>

          </tr>
        </thead>


        <tbody>

          {applications.map((application) => (

            <tr
              key={`${application.namespace}-${application.name}`}
              className="border-b"
            >

              <td className="px-4 py-3">
                {application.namespace}
              </td>


              <td className="px-4 py-3 font-medium">
                <Link
                  href={`/applications/${application.namespace}/${application.name}`}
                  className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {application.name}
                </Link>
              </td>


              <td className="px-4 py-3">
                {application.deployment}
              </td>


              <td className="px-4 py-3">
                {application.service ?? "-"}
              </td>


              <td className="px-4 py-3">
                {application.hosts.join(", ") || "-"}
              </td>


              <td className="px-4 py-3">
                {application.ready_replicas}
                /
                {application.desired_replicas}
              </td>


              <td className="px-4 py-3">

                <ApplicationStatusBadge
                  status={application.status}
                />

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
