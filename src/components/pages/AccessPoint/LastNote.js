export default function LastNote({ text, ButtnTxt, link }) {
  return (
    <div className="info">
      {text}
      <a href={link}>{ButtnTxt}</a> instead.
    </div>
  );
}
