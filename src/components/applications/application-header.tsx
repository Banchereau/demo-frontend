import { Badge } from "@/components/ui/badge";
import type { ApplicationDetail } from "@/types/application";


interface Props {
  application: ApplicationDetail;
}


export function ApplicationHeader({
  application,
}: Props) {

  return (
    <div className="flex items-center justify-between">

      <div>
        <h1 className="text-2xl font-bold">
          {application.name}
        </h1>

        <p className="text-muted-foreground">
          Namespace: {application.namespace}
        </p>
      </div>


      <Badge>
        {application.status}
      </Badge>

    </div>
  );
}
