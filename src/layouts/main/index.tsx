
import NavBar from '../../components/navBar';
import { Container, ChildrenContainer } from './styles';

interface IProps {
    children: JSX.Element
}

function MainLayout({ children }: IProps) {
  return ( 
    <Container>
        <NavBar />
        <ChildrenContainer>
            {children}
        </ChildrenContainer>
    </Container>
  );
}

export default MainLayout;