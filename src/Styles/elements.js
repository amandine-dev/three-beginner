import styled from "styled-components";

export const Header = styled.header`
  background-color: #f76c6c;
  color: #fff;
`;
export const Footer = styled.footer`
  border-top: 2px solid #f76c6c;
`;

export const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
`;

export const CardRow = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  justify-content: space-between;
`;

export const Card = styled.article`
  padding: 20px;
  border: 1px solid #c9c9c9;
  border-radius: 7px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  > img:first-child {
    border-radius: 7px 7px 0 0;
    margin-bottom: 20px;
    max-width: 100%;
    height: auto;
  }
  h3,
  h4 {
    color: #f76c6c;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
    em {
      padding: 0.25em;
      background-color: #eddbff;
      border-radius: 4px;
    }
  }
  p,
  ul {
    color: #757575;
    line-height: 1.5;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
    margin: 4px 0;
    display: flex;
    justify-content: space-around;
    border: #f76c6c 1px solid;
    border-radius: 4px;
    padding: 2px;
  }
`;

export const Badge = styled.span`
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  /* Colors */
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;

  /* Rounded border */
  border-radius: 9999px;
  height: 20px;
  width: 20px;
`;

export const Button = styled.button`
button{background-color:#4b3f39;
    font-size:12px;
    text-decoration:none;
    color:#fff;
    position:relative;
    padding:10px 20px;
    padding-right:50px;
    background-image: linear-gradient(bottom, rgb(62,51,46) 0%, rgb(101,86,78) 100%);
    border-radius: 15px;
    box-shadow: inset 0px 1px 0px #9e8d84, 0px 5px 0px 0px #322620, 0px 10px 5px #999;
    margin-bottom: 5px
    padding: 5px

}
button:active{
    top:3px;
	background-image: linear-gradient(bottom, rgb(62,51,46) 100%, rgb(101,86,78) 0%);
	box-shadow: inset 0px 1px 0px #9e8d84, 0px 2px 0px 0px #322620, 0px 5px 3px #999;
}
`;