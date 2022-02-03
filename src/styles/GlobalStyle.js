import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, 
    body, 
    #root {
        height: 100%;
    }

    #root {
        display: flex;
        flex-direction: column;
    }

    body {
        margin: 0;
        font-family: ${(props) => props.theme.paragraphFont};
    }

    .wrapper {
        flex: 1;
    }
`;

export default GlobalStyle;
