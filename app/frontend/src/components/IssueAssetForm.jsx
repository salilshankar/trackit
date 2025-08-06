import { useState } from "react";

export default function IssueAssetForm({ onIssued }) {
  const [form, setForm] = useState({
    employee_name: "",
    employee_email: "",
    asset_type: "",
    asset_model: "",
    comments: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/assets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ employee_name: "", employee_email: "", asset_type: "", asset_model: "", comments: "" });
    setLoading(false);
    onIssued?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold">Issue New Asset</h2>

      {["employee_name", "employee_email", "asset_model", "comments"].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          value={form[field]}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required={field !== "comments"}
        />
      ))}

      <select
        name="asset_type"
        value={form.asset_type}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      >
        <option value="">Select Asset Type</option>
        <option value="Laptop">Laptop</option>
        <option value="Monitor">Monitor</option>
        <option value="Keyboard">Keyboard</option>
        <option value="Mouse">Mouse</option>
        <option value="Phone">Phone</option>
        <option value="Tablet">Tablet</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>
        {loading ? "Issuing..." : "Issue Asset"}
      </button>
    </form>
  );
}