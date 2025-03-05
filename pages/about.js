import Navbar from "@/components/navbar";
import MiniHero from "@/components/minihero";
import LeftBlock from "@/components/leftblock";
import Footer from "@/components/footer";
import RightBlock from "@/components/rightblock";

export default function About() {
    return (
        <>
            <Navbar />
            <MiniHero heading={"What we stand for"} subheading={"Our goal is to streamline social media account management"} />
            <LeftBlock heading={"How we started"} body={"The idea for Omnino came from the frustration of managing social media across multiple platforms. Posting, scheduling, and staying consistent can quickly become overwhelming. I wanted to create a simple solution that would make social media management easier and more efficient—without the complexity.\n" +
                "\n" +
                "What started as a personal solution has grown into a platform designed to help anyone streamline their social media process, save time, and stay focused on what really matters—growing their brand."}/>
            <RightBlock heading={"Future Growth"} body={"Keep an eye out for more social media platform integration."}/>
            <Footer />
        </>

    )
}