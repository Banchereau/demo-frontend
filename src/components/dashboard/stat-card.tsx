import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import type { LucideIcon } from "lucide-react";


interface StatCardProps {
  title: string;
  value: string | number;
  status?: string;
  description?: string;
  icon?: LucideIcon;
}


export function StatCard({
  title,
  value,
  status = "Healthy",
  description,
  icon: Icon,
}: StatCardProps) {

  return (
    <Card className="border">

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>

        {Icon && (
          <Icon className="h-5 w-5 text-muted-foreground" />
        )}

      </CardHeader>


      <CardContent>

        <div className="text-3xl font-bold">
          {value}
        </div>


        <Badge className="mt-3">
          {status}
        </Badge>


        {description && (
          <p className="mt-2 text-sm text-muted-foreground">
            {description}
          </p>
        )}

      </CardContent>

    </Card>
  );
}
