import { useEffect, useState } from "react";

export default function AssetTable({ refresh }) {
  const [assets, setAssets] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ comments: "", asset_model: "" });
  const [saving, setSaving] = useState(false);

  // NEW: filters
  const [status, setStatus] = useState("All"); // All | Issued | Returned
  const [sort, setSort] = useState("desc");    // desc=newest first, asc=oldest first
  const [loading, setLoading] = useState(false);

  const loadAssets = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (status !== "All") params.set("status", status);
      if (sort) params.set("sort", sort);
      const qs = params.toString();
      const url = qs ? `/api/assets/search?${qs}` : "/api/assets/search";
      const res = await fetch(url);
      const data = await res.json();
      setAssets(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAssets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh, status, sort]);

  const handleReturn = async (id) => {
    await fetch(`/api/assets/${id}/return`, { method: "POST" });
    loadAssets();
  };

  const startEdit = (a) => {
    setEditingId(a.id);
    setEditForm({ comments: a.comments || "", asset_model: a.asset_model || "" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ comments: "", asset_model: "" });
  };

  const saveEdit = async () => {
    if (!editingId) return;
    setSaving(true);
    await fetch(`/api/assets/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editForm),
    });
    setSaving(false);
    cancelEdit();
    loadAssets();
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex flex-wrap items-end gap-3 mb-4">
        <h2 className="text-xl font-semibold mr-auto">Issued Assets</h2>

        <label className="text-sm">
          <span className="mr-2">Status</span>
          <select
            className="border p-2 rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>All</option>
            <option>Issued</option>
            <option>Returned</option>
          </select>
        </label>

        <label className="text-sm">
          <span className="mr-2">Sort</span>
          <select
            className="border p-2 rounded"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="desc">Newest</option>
            <option value="asc">Oldest</option>
          </select>
        </label>
      </div>

      {loading ? (
        <div className="text-sm text-gray-500">Loading…</div>
      ) : (
        <table className="w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Employee</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Asset</th>
              <th className="p-2 text-left">Issued At</th>
              <th className="p-2 text-left">Returned</th>
              <th className="p-2 text-left">Status</th>        {/* NEW */}
              <th className="p-2 text-left">Last Updated</th>  {/* NEW */}
              <th className="p-2 text-left">Comments</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((a) => (
              <tr key={a.id} className="border-t align-top">
                <td className="p-2">{a.employee_name}</td>
                <td className="p-2">{a.employee_email}</td>
                <td className="p-2">
                  {editingId === a.id ? (
                    <input
                      className="border p-1 rounded w-40"
                      value={editForm.asset_model}
                      onChange={(e) => setEditForm({ ...editForm, asset_model: e.target.value })}
                    />
                  ) : (
                    a.asset_model
                  )}
                </td>
                <td className="p-2">{a.issued_at.slice(0, 10)}</td>
                <td className="p-2">{a.returned_at ? a.returned_at.slice(0, 10) : "—"}</td>
                <td className="p-2">{a.status}</td> {/* NEW */}
                <td className="p-2">
                  {a.last_updated ? a.last_updated.slice(0, 10) : "—"}
                </td> {/* NEW */}
                <td className="p-2">
                  {editingId === a.id ? (
                    <textarea
                      className="border p-1 rounded w-56 h-16"
                      value={editForm.comments}
                      onChange={(e) => setEditForm({ ...editForm, comments: e.target.value })}
                    />
                  ) : (
                    <span className="whitespace-pre-wrap">{a.comments || "—"}</span>
                  )}
                </td>
                <td className="p-2 space-x-2">
                  {editingId === a.id ? (
                    <>
                      <button
                        onClick={saveEdit}
                        className="bg-blue-600 text-white px-3 py-1 rounded disabled:opacity-50"
                        disabled={saving}
                      >
                        {saving ? "Saving…" : "Save"}
                      </button>
                      <button onClick={cancelEdit} className="text-gray-600 underline">
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      {!a.returned_at && (
                        <button
                          onClick={() => handleReturn(a.id)}
                          className="text-blue-600 underline text-sm mr-2"
                        >
                          Return
                        </button>
                      )}
                      <button
                        onClick={() => startEdit(a)}
                        className="text-indigo-600 underline text-sm"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {assets.length === 0 && (
              <tr>
                <td className="p-4 text-gray-500 text-center" colSpan={9}>
                  No assets found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
