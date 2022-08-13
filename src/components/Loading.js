// Loading.js
import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import loading from '../assets/images/loading.gif';

const divStyle = css`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 100;
    left: 0;
    background: #ffffffb7;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const textStyle = css`
    font: 1rem 'Noto Sans KR';
     text-align: center;
`;

const Loading = () => {
    return (
        <>
            <div css={divStyle}>
                <img src={loading} alt="로딩중" width="5%" />
            </div>
        </>
    );
};

export default Loading;
