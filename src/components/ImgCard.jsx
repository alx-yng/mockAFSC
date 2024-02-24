export default function ImgCard({
  img = "https://fakeimg.pl/600x400",
  description = "This is a default course description",
}) {
  return (
    <>
      <div className="size-[20rem] bg-slate-200 rounded-lg shadow-lg">
        <img className="p-2 aspect-[3/2]" src={img} />
        <p className="text-slate-700 mx-2">{description}</p>
      </div>
    </>
  );
}
