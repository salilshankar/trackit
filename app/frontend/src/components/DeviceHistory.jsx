import { useState } from "react";
import NotificationBanner from "./NotificationBanner";

export default function DeviceHistory() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const fetchHistory = async () => {
    setError("");
    setResult(null);
    try {
      const res = await fetch(`/api/device-history/${email}`);
      if (!res.ok) throw new Error("Device history unavailable");
      const data = await res.json();
      setResult(data);
    } catch {
      setError("⚠️ Device history service is down.");
    }
  };

  const recover = async () => {
    await fetch("/api/recover", { method: "POST" });
    fetchHistory();
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Device History</h2>
      <div className="flex gap-2 mb-2">
        <input
          placeholder="Employee Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 flex-1 rounded"
        />
        <button onClick={fetchHistory} className="bg-blue-600 text-white px-4 rounded">
          Fetch
        </button>
      </div>
      {error && <NotificationBanner text={error} onRecover={recover} />}
      {result && (
        <div className="text-sm mt-2">
          <p><strong>Email:</strong> {result.email}</p>
          <p><strong>Device count:</strong> {result.count}</p>
          <p><strong>Models:</strong> {result.models.join(", ") || "—"}</p>
        </div>
      )}
    </div>
  );
}