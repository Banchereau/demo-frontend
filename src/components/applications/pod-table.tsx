import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type {
  ApplicationPodDetail,
} from "@/types/application";


interface Props {
  pods: ApplicationPodDetail[];
}


export function PodTable({
  pods,
}: Props) {


  return (
    <Card className="round-md border">

      <CardHeader>
        <CardTitle>
          Pods
        </CardTitle>
      </CardHeader>


      <CardContent>

        <div className="space-y-2">

          {pods.map((pod) => (

            <div
              key={pod.name}
              className="border rounded-md p-3"
            >

              <p className="font-medium">
                {pod.name}
              </p>

              <p>
                Status:
                {" "}
                {pod.status}
              </p>

              <p>
                Restarts:
                {" "}
                {pod.restarts}
              </p>

            </div>

          ))}

        </div>

      </CardContent>

    </Card>
  );
}
