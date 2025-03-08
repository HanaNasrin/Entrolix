import { Card, Button } from "react-bootstrap";
import { FaUserGraduate, FaBell, FaUniversity } from "react-icons/fa";

const HodAlerts = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Scholarship Officer Dashboard</h1>
      <div className="d-flex flex-wrap gap-3">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <FaUserGraduate className="me-2 text-primary" size={30} />
            <Card.Title>Alice Johnson</Card.Title>
            <Card.Text>
              <FaUniversity className="me-1" /> Computer Science | Merit-Based
            </Card.Text>
            <Button variant="outline-primary">
              <FaBell className="me-1" /> Send Alert
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <FaUserGraduate className="me-2 text-primary" size={30} />
            <Card.Title>Bob Smith</Card.Title>
            <Card.Text>
              <FaUniversity className="me-1" /> Mechanical Engineering | Need-Based
            </Card.Text>
            <Button variant="outline-primary">
              <FaBell className="me-1" /> Send Alert
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <FaUserGraduate className="me-2 text-primary" size={30} />
            <Card.Title>Charlie Brown</Card.Title>
            <Card.Text>
              <FaUniversity className="me-1" /> Electrical Engineering | Sports Scholarship
            </Card.Text>
            <Button variant="outline-primary">
              <FaBell className="me-1" /> Send Alert
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HodAlerts;