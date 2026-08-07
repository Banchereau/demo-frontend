"use client";

import { useEffect, useState } from "react";
import { getPodLogs } from "@/lib/api/pods";
import { PodLogsResponse } from "@/types/pod-log";

interface PodLogsViewerProps {
  namespace: string;
  pod: string;
}

export default function PodLogsViewer({
  namespace,
  pod,
}: PodLogsViewerProps) {
  const [data, setData] = useState<PodLogsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [tail, setTail] = useState(200);
  const [timestamps, setTimestamps] = useState(false);
  const [previous, setPrevious] = useState(false);

  async function loadLogs() {
    try {
      setLoading(true);
      setError("");

      const result = await getPodLogs(namespace, pod, {
        tail,
        timestamps,
        previous,
      });

      setData(result);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to retrieve logs"
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadLogs();
  }, [tail, timestamps, previous]);

  if (loading) {
    return (
      <div className="p-4">
        Loading logs...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-4">

      <div className="flex items-center gap-4">

        <label>
          Lines:
          <select
            className="ml-2 border rounded px-2 py-1"
            value={tail}
            onChange={(e) =>
              setTail(Number(e.target.value))
            }
          >
            <option value={50}>50</option>
            <option value={200}>200</option>
            <option value={500}>500</option>
          </select>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={timestamps}
            onChange={(e) =>
              setTimestamps(e.target.checked)
            }
          />
          Timestamps
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={previous}
            onChange={(e) =>
              setPrevious(e.target.checked)
            }
          />
          Previous
        </label>

        <button
          className="border rounded px-3 py-1"
          onClick={loadLogs}
        >
          Refresh
        </button>

      </div>

      <pre
        className="
          bg-black
          text-green-400
          p-4
          rounded
          overflow-auto
          max-h-[600px]
          text-sm
        "
      >
        {data?.logs || "No logs"}
      </pre>

    </div>
  );
}
