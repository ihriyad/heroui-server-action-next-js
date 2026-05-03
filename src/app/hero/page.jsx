import { Button } from "@heroui/react";
import React from "react";

const HeroPage = () => {
  return (
    <div>
      <p>Hero Page</p>
      <div className="flex flex-wrap gap-4">
        <Button variant="secondary">secondary</Button>
        <Button variant="danger-soft">Danger Soft</Button>
      </div>
    </div>
  );
};

export default HeroPage;
