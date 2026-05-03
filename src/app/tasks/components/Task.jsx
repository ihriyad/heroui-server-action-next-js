import React from "react";
import { Card } from "@heroui/react";
const Task = ({ task }) => {
  const { title, description, status } = task;
  return (
    <Card className="w-[320px] border-b" variant="primary">
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>
          {description} (bg-surface-secondary)
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <p>{status}</p>{" "}
      </Card.Content>
    </Card>
  );
};

export default Task;
