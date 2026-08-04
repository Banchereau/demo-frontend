import { getIngresses } from "@/lib/api/ingresses";
import { IngressTable } from "@/components/ingresses/ingress-table";

export default async function IngressesPage() {
  const ingresses = await getIngresses();

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">
          Kubernetes Ingresses
        </h1>

        <p className="text-muted-foreground">
          HTTP routes exposed through Kubernetes Ingress resources.
        </p>
      </div>

      <IngressTable ingresses={ingresses} />

    </div>
  );
}
