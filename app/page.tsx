import Image from "next/image";
import Grid from "./Components/GridContainer";

export default function Home() {
  return (
    <Grid>
      <h1 className="text-[96px] text-center text-accent1">
        Quality Homes For Humankind™
      </h1>
      <section className="box-border content-stretch flex flex-col gap-[40px] items-center px-[240px] py-[80px] relative w-full">
        <h1 className="text-[60px] text-center">Our Mission</h1>
        <p className="text-[40px]">
          Quality Homes for Humankind (QHH) empowers young adults facing
          housing and job insecurity by providing secure transitional
          housing, cultivating a sense of belonging, and building assets
          for a sustainable career and future.
        </p>
      </section>
      <section className="box-border content-stretch flex flex-col gap-[40px] items-center px-[240px] py-[80px] relative w-full">
        <h1 className="text-[60px] text-center">What Do We Provide</h1>
        <ul className="list-disc text-[40px]">
          <li>Temporary Housing</li>
          <li>A Mailing Address</li>
          <li>A Path Into The Workforce</li>
        </ul>
      </section>
      <section className="box-border content-stretch flex flex-col gap-[40px] items-center px-[240px] py-[80px] relative w-full">
        <h1 className="text-[60px] text-center">Our Story</h1>
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
    </Grid>
  );
}
