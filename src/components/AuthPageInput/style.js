import { css } from "@emotion/react";
import { type } from "@testing-library/user-event/dist/type";

export const inputBox = css`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 10px;
`;

export const input = css`
    box-sizing: border-box;
    outline: none;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 10px 30px 10px 10px;
    width: 100%;
    background-color: white;
    font-size: 14px;
    cursor: pointer;
`;

export const messageBox = (type) => css`
    padding: 5px 10px;
    width: 100%;
    color: ${type === "error" ? "#ff6161" : "#00921b"};
    font-size: 12px;
    font-weight: 600;
`;

export const inputIcon = (type) => css`
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${type === "error" ? "#ff3030" : "#00921b"};
`;
