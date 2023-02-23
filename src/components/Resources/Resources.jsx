import React, { useEffect, useState } from "react";
import { getResources } from "../../Functions/Functions";

export const Resources = () => {
  const [resources, setResources] = useState(null);
  useEffect(() => {
    getResources(setResources);
  }, []);
  console.log(resources);
  return <div>Resources</div>;
};
