"use client";

interface EventFiltersProps {
  namespace?: string;
  type?: string;
  limit?: string;
}

export default function EventFilters({
  namespace = "",
  type = "",
  limit = "50",
}: EventFiltersProps) {
  return (
    <form
      method="GET"
      className="flex flex-wrap items-end gap-4 rounded-lg border p-4"
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">
          Namespace
        </label>

        <input
          name="namespace"
          defaultValue={namespace}
          placeholder="all"
          className="rounded-md border px-3 py-2 text-sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">
          Type
        </label>

        <select
          name="type"
          defaultValue={type}
          className="rounded-md border px-3 py-2 text-sm"
        >
          <option value="">
            All
          </option>

          <option value="Normal">
            Normal
          </option>

          <option value="Warning">
            Warning
          </option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">
          Limit
        </label>

        <select
          name="limit"
          defaultValue={limit}
          className="rounded-md border px-3 py-2 text-sm"
        >
          <option value="10">
            10
          </option>

          <option value="25">
            25
          </option>

          <option value="50">
            50
          </option>

          <option value="100">
            100
          </option>

          <option value="200">
            200
          </option>
        </select>
      </div>

      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
      >
        Filter
      </button>
    </form>
  );
}
