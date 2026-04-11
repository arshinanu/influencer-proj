import "./SocialBadge.css";

export default function SocialBadge({ platform, handle, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="social-badge">
      <span className="social-platform">{platform}</span>
      <span className="social-handle">{handle}</span>
    </a>
  );
}
