import type { BoxProps } from "../Box/types";
import * as React from "react";
import { css } from "../../styled-system/css";

export const Box: React.FC<BoxProps> = () => {
  return <div className={css({ bg: "red.400" })}>Hello</div>;
};
