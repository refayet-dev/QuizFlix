export default function CheckBox({ className, text }) {
  return (
    <div>
      <label className={className}>
        <input type="checkbox" />

        <span>{text}</span>
      </label>
    </div>
  );
}
