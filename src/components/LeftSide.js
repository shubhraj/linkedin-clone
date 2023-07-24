import styled from "styled-components";

const Leftside = (props) => {
    return <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground>
                        <a>
                            <Photo/>
                            <Link>Welcome, There!</Link>
                        </a>
                        <a>
                            <PhotoText>Add A Photo!</PhotoText>
                        </a>
                    </CardBackground>
                </UserInfo>
            </ArtCard>
        </Container>
}


const Container = styled.div`
    grid-area: Leftside;
`;

const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0/ 15%), 0 0 0 rgb(0 0 0/ 20%);
`

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const Photo = styled.img``;

const Link = styled.a``;

const CardBackground = styled.div``;

const PhotoText = styled.div``;

export default Leftside;