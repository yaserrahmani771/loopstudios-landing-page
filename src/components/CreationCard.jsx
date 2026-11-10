export default function CreationCard({ creationCard }) {
  return (
    <div
      className="background cursor-pointer text-white p-4 pt-9 sm:pt-15 md:pt-22 lg:pt-80 lg:p-6 hover:bg- hover:text-black"
      style={{
        "--mobile-bg": `url("${creationCard.mobileBG}")`,
        "--desktop-bg": `url("${creationCard.desktopBG}")`,
      }}
    >
      <h3 className="w-3/5 md:text-lg lg:text-xl xl:text-2xl">
        {creationCard.title}
      </h3>
    </div>
  );
}
