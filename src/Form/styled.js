import styled from "styled-components";

export const Fieldset = styled.fieldset`
    border: 1.5px solid hsl(197, 80%, 30%);
    padding: 20px;
    border-radius: 3px;
    margin: 20px 0;
    width: 100%;
`;

export const Legend = styled.legend`
    background-color: hsl(197, 80%, 40%);
    color: white;
    padding: 10px;
    border-radius: 3px;
`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 130px;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
`;

export const FormField = styled.input`
    border: 1px solid hsl(197, 80%, 40%);
    padding: 5px;
    width: 100%;
    max-width: 370px;
    border-radius: 3px;

    &:required {
        border: 2px solid hsl(197, 80%, 40%);
    }
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    padding: 10px;
    color: white;
    background-color: hsl(197, 80%, 40%);
    border-radius: 3px;

    &:hover {
        background-color: hsl(197, 80%, 43%);
    }

    &:active {
        background-color: hsl(197, 80%, 46%);
    }
`;

export const Info = styled.p`
    font-family: "Arial", sans-serif;
    font-size: 12px;
    font-style: italic;
    text-align: center;
`;