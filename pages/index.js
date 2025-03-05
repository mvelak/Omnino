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
            <LeftBlock heading={<q>No fluff. We deliver what you need</q>} body={"Here at Omnino, we eliminate the complexity and focus on what really matters—delivering a straightforward, powerful solution for managing your social media. Our platform simplifies the process, allowing you to automate and post across multiple channels from one easy-to-use dashboard.\n" +
                "\n" +
                "No unnecessary tools or confusing features—just the essentials to save you time and keep your social media game strong."}/>
            <RightBlock heading={<q>Maximum impact for our users.</q>} body={"Take control of your content without the manual effort. Our platform lets you schedule posts across various social media channels in advance, so you can stay consistent and engaged with your audience around the clock. With real-time analytics, you can track performance and adjust your strategy, ensuring every post has maximum impact.\n" +
                "\n" +
                "Spend less time posting, and more time strategizing."}/>
            <Footer />
      </>
  );
}
