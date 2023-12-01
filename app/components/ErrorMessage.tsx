import { Text } from "@radix-ui/themes";
import React from "react";

const ErrorMessage = ({ children }: React.PropsWithChildren) => {
  return children ? (
    <Text color="red" as="p">
      {children}
    </Text>
  ) : null;
};

export default ErrorMessage;
