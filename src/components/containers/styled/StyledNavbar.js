import Styled from "styled-components";

export const ButtonContainer = Styled.button`
    text-transform: capitalize;
    font-size: 1.1rem;
    color: ${props =>
      props.styledCart ? "var(--mainYellow)" : "var (--lightBlue)"};;
    background: var(--mainWhite);
    border: 0.04rem solid var(--lightBlue);
    border-color: ${props =>
      props.styledCart ? "var(--mainYellow)" : "var(--lightBlue)"};
    border-radius: 0.3rem;
    padding: 0.2rem auto;
    margin: 0.2rem 0;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
&:hover{
    background: ${props =>
      props.styledCart ? "var(--mainYellow)" : "var(--lightBlue)"};;
    color: var(--mainWhite)
}
&:focus{
    outline: none;
}
`;

export const NavbarWrapper = Styled.nav`
    background: var(--lightBlue);
    .nav-link {
        color: var(--mainWhite);
        font-size: 1.4rem;
        text-transform: capitalize;
    }
`;
