import Header from "../components/Header.jsx";
import ImgCard from "../components/ImgCard.jsx";
import Footer from "../components/Footer.jsx";
import HalfCard from "../components/HalfCard.jsx";
import Icons from "../components/Icons.jsx";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header pageTitle="Home" />

      {/* Hero */}
      <section className="bg-slate-300 p-16 home-hero">
        <h1 className="text-slate-700 xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-3xl font-bold text-wrap text-center">
          Welcome to{" "}
          <span className="text-cyan-700">Ames Figure Skating Club</span>!
        </h1>
        <div className="flex justify-center mt-8 lg:mt-16 gap-4">
          <Icons />
        </div>
      </section>

      {/* Course Catalog */}
      <section className="container mx-auto mt-8 mb-32 lg:max-w-[70rem] md:max-w-[45rem]">
        <h1 className="text-slate-200 text-center text-4xl font-semibold tracking-wide">
          Class Catalog
        </h1>
        <div className="my-8 grid row-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          <ImgCard description="hello world" />
          <ImgCard />
          <ImgCard />
          <ImgCard />
          <ImgCard />
          <ImgCard />
        </div>
      </section>

      {/* Disclaimers */}
      <section className="container mx-auto my-8 mb-32 max-w-[70rem]">
        <h1 className="text-slate-200 font-semibold tracking-wide text-4xl text-center">
          Disclaimer
        </h1>
        <div className="grid grid-rows-1 grid-cols-2 place-items-center my-8">
          <HalfCard height={"h-96"} />
          <HalfCard height={"h-96"} />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
