import "./Avatar.css";

export function Avatar({ src }) {
  return (
    <div className="avatar">
      <img src={src} alt="Profile avatar" />
    </div>
  );
}
