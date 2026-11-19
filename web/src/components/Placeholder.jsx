export default function Placeholder({ children }) {
  return (
    <div className="placeholder">
      <p className="placeholder-label">Placeholder</p>
      <p>{children}</p>
    </div>
  );
}
