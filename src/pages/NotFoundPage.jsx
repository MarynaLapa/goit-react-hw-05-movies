import Container from 'components/PageParts/Container';
import PageTitle from 'components/PageParts/PageTitle'
import Section from 'components/PageParts/Section';
import styled from 'styled-components';
import image from '../components/img/img-1.png';

const Wrap = styled.div`
    width: 600px;
    text-align: center;
    margin: 0 auto;
    
    img {
      margin: 0 auto;
    }
`
const NotFoundPage = () => {
  return (
    <main>
      <Section>
        <Container>
          <Wrap>
            <img src={image} alt="404" />
            <PageTitle title={'Upss... 404 Not Found Page'} />
          </Wrap>
        </Container>
      </Section>
    </main>
    
    
  )
}

export default NotFoundPage