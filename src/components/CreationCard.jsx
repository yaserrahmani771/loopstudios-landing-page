export default function CreationCard({ creationCard }) {
  return (
    <div
      className="background text-white p-4 pt-9"
      style={{
        "--mobile-bg": `url("${creationCard.mobileBG}")`,
        "--desktop-bg": `url("${creationCard.dektopBG}")`,
      }}
    >
      <h3 className="w-2/5">{creationCard.title}</h3>
    </div>
  );
}
