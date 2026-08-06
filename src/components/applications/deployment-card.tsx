import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type {
  ApplicationDeploymentDetail,
} from "@/types/application";


interface Props {
  deployment: ApplicationDeploymentDetail | null;
}


export function DeploymentCard({
  deployment,
}: Props) {

  if (!deployment) {
    return null;
  }


  return (
    <Card className="round-md border">

      <CardHeader>
        <CardTitle>
          Deployment
        </CardTitle>
      </CardHeader>


      <CardContent className="space-y-2">

        <p>
          Name: {deployment.name}
        </p>

        <p>
          Replicas:
          {" "}
          {deployment.ready_replicas}
          /
          {deployment.desired_replicas}
        </p>

        <p className="break-all">
          Image:
          {" "}
          {deployment.image}
        </p>

      </CardContent>

    </Card>
  );
}
