import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import LeftBlock from "@/components/leftblock";
import RightBlock from "@/components/rightblock";
import Footer from "@/components/footer";
import { useStateContext } from "@/context/StateContext"


export default function Home() {
    const { user } = useStateContext();
    return (
        <>
            <Navbar />
            <Hero heading={"All your accounts in one app"} subheading={"Automate posting, interact with your audience, and manage your content with Omnino"}
                  solidButtonText={"Get Started"} solidButtonLink={user ? "/app/dashboard" : "/auth/login"} borderButtonText={"Learn More"} borderButtonLink={"/about"}/>
            <LeftBlock heading={<q>No fluff. We deliver what YOU need</q>} body={"Lorem ipsum odor amet, consectetuer adipiscing elit. Netus libero lectus magnis" +
                "eleifend morbi. Acursus lacus eros, mattis lobortis mi quis. Ornare augue netus nunc parturient arcu faucibus. Euismod rhoncus nec semper finibus" +
                "habitant tempus. Mi lectus potenti curae mattis fermentum nullam enim porttitor. Natoque mauris nisl nisl nostra nascetur potenti habitant imperdiet." +
                "Consectetur mattis facilisi urna habitasse eu ridiculus ligula. Finibus massa massa aenean lectus habitasse. Primis turpis torquent luctus tristique" +
                "nulla fringilla lobortis ridiculus"}/>
            <RightBlock heading={<q>No fluff. We deliver what YOU need</q>} body={"Lorem ipsum odor amet, consectetuer adipiscing elit. Netus libero lectus magnis" +
                "eleifend morbi. Acursus lacus eros, mattis lobortis mi quis. Ornare augue netus nunc parturient arcu faucibus. Euismod rhoncus nec semper finibus" +
                "habitant tempus. Mi lectus potenti curae mattis fermentum nullam enim porttitor. Natoque mauris nisl nisl nostra nascetur potenti habitant imperdiet." +
                "Consectetur mattis facilisi urna habitasse eu ridiculus ligula. Finibus massa massa aenean lectus habitasse. Primis turpis torquent luctus tristique" +
                "nulla fringilla lobortis ridiculus"}/>
            <Footer />
      </>
  );
}
