import { getApplications } from "@/lib/api/applications";
import { ApplicationTable } from "@/components/applications/application-table";


export default async function ApplicationsPage() {

  const applications = await getApplications();


  return (
    <main className="space-y-6">

      <h1 className="text-3xl font-bold mb-6">
        Kubernetes Applications
      </h1>


      <ApplicationTable
        applications={applications}
      />

    </main>
  );
}
