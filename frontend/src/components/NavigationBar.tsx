import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
    return (
        <Navbar expand="lg" style={{ backgroundColor: '#2c3e50', marginBottom: '20px' }} variant="dark" className="shadow-sm">
            <Container>
                <Navbar.Brand style={{ fontSize: '24px', fontWeight: 'bold', color: '#ecf0f1', display: 'flex', justifyContent: 'center' }}>
                    Earthquake Data
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;