import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type {
  ApplicationServiceDetail,
} from "@/types/application";


interface Props {
  service: ApplicationServiceDetail | null;
}


export function ServiceCard({
  service,
}: Props) {

  if (!service) {
    return null;
  }


  return (
    <Card className="round-md border">

      <CardHeader>
        <CardTitle>
          Service
        </CardTitle>
      </CardHeader>


      <CardContent className="space-y-2">

        <p>
          Name: {service.name}
        </p>

        <p>
          Type: {service.type}
        </p>

        <p>
          Cluster IP: {service.cluster_ip}
        </p>

      </CardContent>

    </Card>
  );
}
