import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { PlatformHealth as PlatformHealthType } from "@/types/health";

import {
  CircleCheck,
  CircleX,
  TriangleAlert,
} from "lucide-react";

interface PlatformHealthProps {
  health: PlatformHealthType;
}

function StatusIcon({ status }: { status: string }) {
  if (status === "healthy") {
    return (
      <CircleCheck className="h-5 w-5 text-green-500" />
    );
  }

  if (status === "degraded") {
    return (
      <TriangleAlert className="h-5 w-5 text-yellow-500" />
    );
  }

  return (
    <CircleX className="h-5 w-5 text-red-500" />
  );
}

function statusVariant(status: string) {
  switch (status) {
    case "healthy":
      return "default";

    case "degraded":
      return "secondary";

    default:
      return "destructive";
  }
}

export function PlatformHealth({
  health,
}: PlatformHealthProps) {
  return (
    <Card className="border">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>
            Platform Health
          </span>

          <Badge
            variant={statusVariant(health.status)}
          >
            {health.status}
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {health.components.map((component) => (
          <div
            key={component.name}
            className="flex items-center gap-3 rounded-md border p-3"
          >
            <StatusIcon
              status={component.status}
            />

            <div>
              <p className="font-medium">
                {component.name}
              </p>

              <p className="text-sm text-muted-foreground">
                {component.message}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
