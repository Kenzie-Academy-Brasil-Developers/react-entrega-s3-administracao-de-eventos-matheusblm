import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
:root{
    --white: #F8F9FA;
    --whitePlus: #E9ECEF;
    --ligthGray: #CED4DA;
    --slateGray: #6C757D;
    --black: #212529;
}
body{
    background-color: var(---white);
    color: var(---black);
}
body, button{
    font-family:'Open Sans', sans-serif; 
    font-size: 1rem;
} 
h1,h2,h3,h4,h5,h6{
    font-family: 'Noto Sans Display', sans-serif;
    font-weight: 700;
    text-align: center;
}
button{
    cursor: pointer;
}
ul{
    list-style: none;
   
}
a{
    text-decoration: none;
    &:visited{
        color: var(---black);
    }
}

`;
