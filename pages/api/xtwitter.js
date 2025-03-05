export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { caption, session } = req.body;

    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${session.accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: caption }),
    };

    try {
        const response = await fetch('https://api.x.com/2/tweets', options);
        const data = await response.json();

        if (!response.ok) {
            console.error("API Error:", data);
            return res.status(response.status).json({ error: data.error || 'Failed to create tweet' });
        }

        return res.status(200).json({ message: "Posted successfully to X" });
    } catch (err) {
        console.error("Internal Server Error:", err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
