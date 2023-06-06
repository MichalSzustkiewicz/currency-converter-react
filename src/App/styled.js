import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 20px;
    padding: 25px;
    width: 700px;
    min-height: 450px;
    background: ${({ theme }) => theme.color.gallery};
    border-radius: 15px;
    box-shadow: 5px 5px 30px black;
`;