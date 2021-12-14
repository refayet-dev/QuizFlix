import { Link } from "react-router-dom";

export default function LastNote({ text, ButtnTxt, link }) {
  return (
    <div className="info">
      {text}
      <Link to={link}>{ButtnTxt}</Link> instead.
    </div>
  );
}
