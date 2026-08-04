import { Badge } from "@/components/ui/badge";

interface Props {
  ready: boolean;
}

export function CertificateStatusBadge({ ready }: Props) {
  if (ready) {
    return (
      <Badge>
        Ready
      </Badge>
    );
  }

  return (
    <Badge variant="destructive">
      Not Ready
    </Badge>
  );
}
