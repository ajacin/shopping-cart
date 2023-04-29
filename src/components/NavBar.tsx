import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          className="rounded-circle border-blue border border-primary"
          variant="outlined"
          style={{ width: "3rem", height: "3em", position: "relative" }}
        >
          <svg
            fill="#000000"
            // height="24px"
            // width="24px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <g>
                <path
                  d="M149.063,424.506c-14.294,0-25.924,11.63-25.924,25.924c0,14.295,11.63,25.924,25.924,25.924s25.924-11.63,25.924-25.924
			C174.987,436.136,163.358,424.506,149.063,424.506z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M369.418,424.506c-14.295,0-25.924,11.63-25.924,25.924c0,14.295,11.63,25.924,25.924,25.924s25.924-11.63,25.924-25.924
			C395.342,436.136,383.712,424.506,369.418,424.506z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M97.215,100.456v-6.481c0-32.163-26.166-58.329-58.329-58.329H0v38.886h38.886c10.721,0,19.443,8.722,19.443,19.443
			v272.203c0,32.163,26.166,58.329,58.329,58.329h32.405h220.354h71.291V385.62H116.658c-10.721,0-19.443-8.722-19.443-19.443
			v-19.443h265.721c41.572,0,79.978-24.817,108.143-69.882c26.387-42.22,40.92-97.961,40.92-156.953v-19.443H97.215z
			 M438.103,256.242c-20.799,33.279-47.493,51.606-75.167,51.606H97.215V139.342h375.309
			C469.813,183.732,457.829,224.682,438.103,256.242z"
                />
              </g>
            </g>
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center p-1 color-white"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              right: "-10px",
              bottom: "-10px",
              color: "white",
            }}
          >
            4
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};
