import { Badge } from "@/components/ui/badge";


interface HealthSummaryProps {
  healthy: number;
  unhealthy: number;
}


export function HealthSummary({
  healthy,
  unhealthy,
}: HealthSummaryProps) {

  return (
    <div className="rounded-lg border p-4">

      <h2 className="text-xl font-semibold">
        Application health
      </h2>

      <div className="mt-4 flex gap-4">

        <Badge>
          🟢 Healthy: {healthy}
        </Badge>

        <Badge variant="destructive">
          🔴 Unhealthy: {unhealthy}
        </Badge>

      </div>

    </div>
  );
}
