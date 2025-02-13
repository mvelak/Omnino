import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Dashboard = () => {

    const [age, setAge] = useState(400);
    function updateAge() {
        setAge((currentValue) => currentValue + 1);
    }

    const [data, setData] = useState(false);
    function updateData() {
        setTimeout(() => {setAge(5);}, 2000)
    }


    return (
        <Section>
            <p>age</p>
            <button onClick={() => updateAge()}>Update Age</button>
            {!data ? <></> : <p>This is the data: {data}</p>}
        </Section>
    )
}


export default Dashboard;


// Styled Components
const Section = styled.section
`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

const TopHead=  styled.h1
`
    font-size: 50px;
    display: flex;
`