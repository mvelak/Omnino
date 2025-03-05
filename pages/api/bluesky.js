import { BskyAgent } from "@atproto/api";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { caption } = req.body;

    const agent = new BskyAgent({ service: "https://bsky.social" });

    try {
        await agent.login({
            identifier: "",
            password: ""
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ error: "Error logging in to Bluesky" });
    }

    try {
        await agent.post({ text: caption, createdAt: new Date().toISOString() });
        return res.status(200).json({ message: "Posted successfully to Bluesky" });
    } catch (error) {
        console.error("Post error:", error);
        return res.status(500).json({ error: "Error posting to Bluesky" });
    }
}
