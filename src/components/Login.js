import styled from 'styled-components';

const Login = (props) => {
    return(
        <Container>
            <Nav>
                <a href='/' >
                    <img src="/images/login-logo.svg"></img>
                </a>
                <div>
                    <Join>Join Now</Join>
                </div>
            </Nav>
        </Container>
    )
}

const Container = styled.div`
    padding: 0px;
`;

const Nav = styled.nav`
    max-width: 100%;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-item: centre;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;
    
    & > a {
        width: 3rem;
        height: 4rem;

        @media(max-width: 768px) {
            padding: 0 5px;

        }
    }
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    border-radius: 4px;
    &:hover {
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.9);
        text-decoration: none;
    }
`;

export default Login;