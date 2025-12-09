import Image from "next/image";
import Grid from "./Components/GridContainer";
import NavBar from "./Components/NavBar";
import Container from "./Components/Container";
import HeroImage from "../public/HeroImage.png";

export default function Home() {
  return (
    <Grid >
      <NavBar />
      <Container className=" grid">
        <div className=" col-start-1 col-end-14 ">
          <h1 className=" text-[96px] text-center text-accent1">
            Quality Homes For Humankind™
          </h1>
          <Image src={HeroImage} alt="Hero Image" />
        </div>
        <section className=" col-start-1 col-end-14 row-start-2 box-border content-stretch flex flex-col gap-[40px] items-center px-[240px] py-[80px] relative w-full">
          <h1 className="text-[60px] text-center">Our Mission</h1>
          <p className="text-[40px]">
            Quality Homes for Humankind (QHH) empowers young adults facing
            housing and job insecurity by providing secure transitional
            housing, cultivating a sense of belonging, and building assets
            for a sustainable career and future.
          </p>
        </section>
        <section className=" col-start-1 col-end-14 row-start-3 box-border content-stretch flex flex-col gap-[40px] items-center px-[240px] py-[80px] relative w-full">
          <h1 className="text-[60px] text-center">What Do We Provide</h1>
          <ul className="list-disc text-[40px]">
            <li>Temporary Housing</li>
            <li>A Mailing Address</li>
            <li>A Path Into The Workforce</li>
          </ul>
        </section>
          <h1 className=" col-start-1 col-end-14 row-start-4 text-[60px] text-center">Our Story</h1>
        <section className=" col-start-1 col-end-14 row-start-5 box-border content-stretch flex flex-col gap-[40px] items-center px-[240px] py-[80px] relative w-full">
          <iframe
            width="840"
            height="472.5"
            src="https://www.youtube.com/embed/hAAJEtDNVao"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </section>
      </Container>
    </Grid>
  );
}
