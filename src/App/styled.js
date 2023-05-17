import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-basis: 650px;
    margin: 20px;
    padding: 40px;
    background: ${({ theme }) => theme.color.gallery};
    border-radius: 15px;
    box-shadow: 5px 5px 30px black;
`;