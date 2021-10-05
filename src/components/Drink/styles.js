import styled from "styled-components";

export const Item = styled.li`
  min-width: 310px;
  max-width: 18%;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  font-size: 0.75em;
  box-shadow: rgb(209 209 213) 0px 5px 15px;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  img {
    width: 100px;
    height: 150px;
  }
  h5 {
    border-top: 1px solid var(--ligthGray);
    width: 100%;
    text-align: center;
  }
  h6 {
    border-bottom: 1px solid var(--ligthGray);
    width: 100%;
    text-align: end;
    font-size: 0.6em;
  }
  button {
    border-radius: 5px;
    border-style: hidden;
    background-color: var(--slateGray);
    margin: 5px;
    width: 100%;
    padding: 5px;
    font-size: 15px;
    transition: 0.5s;
    &:hover {
      background-color: var(--ligthGray);
    }
  }
  select {
    border-style: hidden;
    width: 200px;
    height: 30px;
    padding: 5px;
  }
`;
