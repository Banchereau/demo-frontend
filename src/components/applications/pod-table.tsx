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
    <Card>

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
              className="border rounded p-3"
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
