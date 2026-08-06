import { getApplicationDetail } from "@/lib/api/applications";

import { ApplicationHeader } from "@/components/applications/application-header";
import { DeploymentCard } from "@/components/applications/deployment-card";
import { ServiceCard } from "@/components/applications/service-card";
import { IngressCard } from "@/components/applications/ingress-card";
import { PodTable } from "@/components/applications/pod-table";


interface PageProps {
  params: Promise<{
    namespace: string;
    name: string;
  }>;
}


export default async function ApplicationDetailPage({
  params,
}: PageProps) {

  const {
    namespace,
    name,
  } = await params;


  const application =
    await getApplicationDetail(
      namespace,
      name
    );


  return (
    <main className="p-6 space-y-6">

      <ApplicationHeader
        application={application}
      />


      <DeploymentCard
        deployment={application.deployment}
      />


      <ServiceCard
        service={application.service}
      />


      <IngressCard
        ingress={application.ingress}
      />


      <PodTable
        pods={application.pods}
      />

    </main>
  );
}
