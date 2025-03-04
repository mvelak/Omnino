// TODO: fix issues with .env vars not working

import { BskyAgent } from "@atproto/api"

const postToBluesky = async () => {
    const agent = new BskyAgent({
        service: "https://bsky.social"
    })

    await agent.login({
        identifier: process.env.BLUESKY_USER,
        password: process.env.BLUESKY_PASS
    })

    await agent.post({
        text: "Testing again",
        createdAt: new Date().toISOString()
    });

    console.log("Posted successfully to Bluesky");
}

export default postToBluesky;
