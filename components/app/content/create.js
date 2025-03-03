import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Create = ({ user }) => {
    const [file, setFile] = useState(null);
    const [fileURL, setFileURL] = useState(null);
    const [caption, setCaption] = useState("");

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
            else if (selected.size > 5000000) { // 5MB limit
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO add api interactom
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

                <SubmitButton type="submit" disabled={caption === null}>Submit</SubmitButton>
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
