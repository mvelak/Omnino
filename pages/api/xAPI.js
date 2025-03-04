const postToX = async (caption, accessToken) => {

    const bodyContent = {
        text: "Hello World"

    }

    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyContent)
    };

    fetch("https://api.x.com/2/tweets", options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
};

export default postToX;
