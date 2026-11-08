export default function CreationCard({ creationCard }) {
  return (
    <div
      className="background text-white p-4 pt-9 3xl:pt-80 3xl:p-6"
      style={{
        "--mobile-bg": `url("${creationCard.mobileBG}")`,
        "--desktop-bg": `url("${creationCard.desktopBG}")`,
      }}
    >
      <h3 className="w-3/5 3xl:text-2xl">{creationCard.title}</h3>
    </div>
  );
}
