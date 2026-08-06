import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type {
  ApplicationIngressDetail,
} from "@/types/application";


interface Props {
  ingress: ApplicationIngressDetail | null;
}


export function IngressCard({
  ingress,
}: Props) {

  if (!ingress) {
    return null;
  }


  return (
    <Card className="round-md border">

      <CardHeader>
        <CardTitle>
          Ingress
        </CardTitle>
      </CardHeader>


      <CardContent className="space-y-2">

        <p>
          Name: {ingress.name}
        </p>

        <p>
          Hosts:
        </p>

        <ul className="list-disc pl-5">
          {ingress.hosts.map((host) => (
            <li key={host}>
              {host}
            </li>
          ))}
        </ul>


        <p>
          TLS:
          {" "}
          {ingress.tls ? "Enabled" : "Disabled"}
        </p>

      </CardContent>

    </Card>
  );
}
