import React from "react";
import { Card, Button, Form } from "react-bootstrap";

const AddAdmissionSchedule = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Add Admission Schedule</h1>
      <Card>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Program</Form.Label>
              <Form.Control type="text" name="program" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" rows={3} required />
            </Form.Group>
            <Button variant="primary">Add Schedule</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddAdmissionSchedule;
