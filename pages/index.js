import Image from "next/image";
import styled from "styled-components"
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import LeftBlock from "@/components/leftblock";
import RightBlock from "@/components/rightblock";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
      <>
          <Navbar />
          <Hero heading={"All your accounts in one app"} subheading={"Automate posting, interact with your audience, and manage your content with Omnino"}/>
          <LeftBlock body={"Lorem ipsum odor amet, consectetuer adipiscing elit. Netus libero lectus magnis eleifend morbi. Acursus lacus eros," +
              "mattis lobortis mi quis. Ornare augue netus nunc parturient arcu faucibus. Euismod rhoncus nec semper finibus habitant tempus." +
              "Mi lectus potenti curae mattis fermentum nullam enim porttitor. Natoque mauris nisl nisl nostra nascetur potenti habitant imperdiet." +
              "Consectetur mattis facilisi urna habitasse eu ridiculus ligula." +
              "Finibus massa massa aenean lectus habitasse. Primis turpis torquent luctus tristique nulla fringilla lobortis ridiculus"}/>
          <RightBlock body={"test"}/>
          <FooterSection />
      </>
  );
}
