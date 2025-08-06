import { useEffect, useState } from "react";

export default function AssetTable({ refresh }) {
  const [assets, setAssets] = useState([]);

  const loadAssets = async () => {
    const res = await fetch("/api/assets");
    const data = await res.json();
    setAssets(data);
  };

  useEffect(() => {
    loadAssets();
  }, [refresh]);

  const handleReturn = async (id) => {
    await fetch(`/api/assets/${id}/return`, { method: "POST" });
    loadAssets();
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Issued Assets</h2>
      <table className="w-full text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Employee</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Asset</th>
            <th className="p-2 text-left">Issued At</th>
            <th className="p-2 text-left">Returned</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((a) => (
            <tr key={a.id} className="border-t">
              <td className="p-2">{a.employee_name}</td>
              <td className="p-2">{a.employee_email}</td>
              <td className="p-2">{a.asset_model}</td>
              <td className="p-2">{a.issued_at.slice(0, 10)}</td>
              <td className="p-2">{a.returned_at ? a.returned_at.slice(0, 10) : "—"}</td>
              <td className="p-2">
                {!a.returned_at && (
                  <button
                    onClick={() => handleReturn(a.id)}
                    className="text-blue-600 underline text-sm"
                  >
                    Return
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}