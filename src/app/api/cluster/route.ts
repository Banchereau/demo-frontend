const BACKEND_URL =
  "http://demo-backend.default.svc.cluster.local/cluster";


export async function GET() {
  try {
    const response = await fetch(
      BACKEND_URL,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return Response.json(
        {
          error: "Backend unavailable",
        },
        {
          status: 503,
        }
      );
    }

    const data = await response.json();

    return Response.json(data);

  } catch {
    return Response.json(
      {
        error: "Unable to reach backend",
      },
      {
        status: 503,
      }
    );
  }
}
