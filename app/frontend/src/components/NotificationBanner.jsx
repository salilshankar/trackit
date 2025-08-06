export default function NotificationBanner({ text, onRecover }) {
  return (
    <div className="bg-red-100 text-red-800 p-2 rounded mb-2 text-sm flex justify-between items-center">
      <span>{text}</span>
      <button onClick={onRecover} className="text-red-600 underline text-xs">
        Recover
      </button>
    </div>
  );
}