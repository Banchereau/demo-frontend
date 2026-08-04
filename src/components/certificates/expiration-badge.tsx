import { Badge } from "@/components/ui/badge";

interface Props {
  expiration: string;
}

export function ExpirationBadge({ expiration }: Props) {
  const expirationDate = new Date(expiration);
  const now = new Date();

  const diff =
    expirationDate.getTime() - now.getTime();

  const days = Math.floor(
    diff / (1000 * 60 * 60 * 24)
  );

  if (days < 0) {
    return (
      <Badge variant="destructive">
        Expired
      </Badge>
    );
  }

  if (days < 30) {
    return (
      <Badge variant="secondary">
        {days} days
      </Badge>
    );
  }

  return (
    <Badge>
      {days} days
    </Badge>
  );
}
