import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import IssueAssetForm from "./components/IssueAssetForm";
import AssetTable from "./components/AssetTable";
import DeviceHistory from "./components/DeviceHistory";

export default function App() {
  const [refreshFlag, setRefreshFlag] = useState(false);

  return (
    <div className="max-w-5xl mx-auto py-8 space-y-6">
      <h1 className="text-3xl font-bold mb-4 text-center">🛠️ TrackIT Dashboard</h1>
      <IssueAssetForm onIssued={() => setRefreshFlag(!refreshFlag)} />
      <AssetTable refresh={refreshFlag} />
      <DeviceHistory />
    </div>
  );
}