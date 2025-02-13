import Image from "next/image";
import styled from "styled-components"
import Navbar from "@/components/header";
import Hero from "@/components/hero";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
      <>
          <Navbar />
          <Hero />
          <FooterSection />
      </>
  )
}
