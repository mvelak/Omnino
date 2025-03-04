import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSession} from "next-auth/react";
import postToBluesky from "@/pages/api/blueskyAPI";
import postToX from "@/pages/api/xAPI";



const Create = () => {
    const { data: session } = useSession();
    const [file, setFile] = useState(null);
    const [fileURL, setFileURL] = useState(null);
    const [caption, setCaption] = useState("");
    const [bluesky, setBluesky] = useState(false);
    const [x, setX] = useState(false);

    useEffect(() => {
        if (file) {
            setFileURL(URL.createObjectURL(file));
            return () => URL.revokeObjectURL(fileURL);
        }
    }, [file]);

    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        if (selected) {
            console.log(file);
            if (!selected.type.startsWith("image") && !selected.type.startsWith("video")) {
                alert("Unsupported file format");
            }
            else if (selected.size > 5000000) {
                alert("Select a file under 5MB");
            }
            else {
                setFile(selected);
            }
        }
    };

    const handleCaptionChange = (e) => {
        setCaption(e.target.value);
    };

    const handleBlueskyChange = (e) => {
        setBluesky(!bluesky);
    }

    const handleXChange = (e) => {
        setX(!x);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted post")

        if (bluesky) {
            (async () => {
                try {
                    await postToBluesky(caption);
                } catch (error) {
                    console.error('Error posting to Bluesky:', error);
                }
            })();
        }

        if (x) {
            (async () => {
                try {
                    await postToX(caption, session.accessToken);
                } catch (error) {
                    console.error('Error posting to X:', error);
                }
            })();
        }


    };

    const getFilePreview = () => {
        if (file) {
            if (file.type.startsWith("image")) {
                return <ImagePreview src={fileURL} alt="File preview" />;
            }
            else if (file.type.startsWith("video")) {
                return (
                    <VideoPreview controls>
                        <source src={fileURL} type={file.type} />
                        Not supported by your browser
                    </VideoPreview>
                );
            }
        }
        return null;
    };

    return (
        <>
            <Header>Create a Post</Header>
            <Form onSubmit={handleSubmit}>
                <Label>Upload a file:</Label>
                <FileInput type="file" onChange={handleFileChange} />
                {getFilePreview()}

                <Label>Enter a caption (max 200 characters):</Label>
                <CaptionInput
                    type="text"
                    value={caption}
                    onChange={handleCaptionChange}
                    placeholder="Enter text here"
                    maxLength="200"
                />

                <Label>Platforms:</Label>
                <CheckboxContainer>
                    <Checkbox>
                        <input
                            type="checkbox"
                            checked={bluesky}
                            onChange={handleBlueskyChange}
                        />
                        Bluesky
                    </Checkbox>
                    <Checkbox>
                        <input
                            type="checkbox"
                            checked={x}
                            onChange={handleXChange}
                        />
                        X
                    </Checkbox>
                </CheckboxContainer>

                <SubmitButton type="submit" disabled={caption === null || (bluesky === false && x === false)}>Submit</SubmitButton>
            </Form>
        </>
    );
};

const Header = styled.h1`
    text-align: center;
    top: 0;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 8px;
    background-color: #f9f9f9;
`;

const Label = styled.p`
    font-size: 16px;
    font-weight: bold;
`;

const FileInput = styled.input`
    margin-bottom: 10px;
`;

const ImagePreview = styled.img`
    width: 200px;
    height: auto;
    margin-top: 10px;
`;

const VideoPreview = styled.video`
    width: 300px;
    height: auto;
    margin-top: 10px;
`;

const CaptionInput = styled.input`
    width: 300px;
    height: 40px;
    font-size: 16px;
    padding: 10px;
`;

const CheckboxContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const Checkbox = styled.label`
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const SubmitButton = styled.button`
    background: white;
    color: black;
    font-size: 14px;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 20px;

    transition: all 0.3s ease;
    &:hover {
        background: black;
        color: white;
    }
`;

export default Create;
