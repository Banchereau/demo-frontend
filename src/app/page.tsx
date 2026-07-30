export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        XCodeWhisperer Platform
      </h1>

      <p className="mt-2 text-muted-foreground">
        Kubernetes DevSecOps dashboard
      </p>

      <div className="mt-6 rounded-lg border p-4">
        <h2 className="text-xl font-semibold">
          Platform overview
        </h2>

        <p className="mt-2">
          GitOps Kubernetes application platform
        </p>

        <p>
          Frontend: Next.js
        </p>

        <p>
          Backend: FastAPI
        </p>

        <p>
          Deployment: FluxCD
        </p>
      </div>
    </div>
  );
}
