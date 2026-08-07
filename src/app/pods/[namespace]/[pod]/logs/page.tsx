import PodLogsViewer from "@/components/pods/pod-logs-viewer";

interface PageProps {
  params: Promise<{
    namespace: string;
    pod: string;
  }>;
}

export default async function PodLogsPage({
  params,
}: PageProps) {
  const { namespace, pod } = await params;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">
          Pod Logs
        </h1>

        <p className="text-sm text-muted-foreground">
          {namespace}/{pod}
        </p>
      </div>

      <PodLogsViewer
        namespace={namespace}
        pod={pod}
      />
    </div>
  );
}
