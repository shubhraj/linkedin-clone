import styled from 'styled-components';

const Login = (props) => {
    return(
        <Container>
            <Nav>
                <a href='/' >
                    <img src="/images/login-logo.svg"></img>
                </a>
            </Nav>
        </Container>
    )
}

const Container = styled.div``;
const Nav = styled.nav``;

export default Login;