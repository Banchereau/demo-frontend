import { Badge } from "@/components/ui/badge";


interface ApplicationStatusBadgeProps {
  status: string;
}


export function ApplicationStatusBadge({
  status,
}: ApplicationStatusBadgeProps) {

  if (status === "healthy") {
    return (
      <Badge>
        🟢 Healthy
      </Badge>
    );
  }


  return (
    <Badge>
      🔴 Unhealthy
    </Badge>
  );
}
