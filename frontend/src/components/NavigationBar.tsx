import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container style={{ display: 'flex', justifyContent: 'center' }}>
                    <Navbar.Brand style={{ fontSize: '32px', }}>Earthquake Data</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;