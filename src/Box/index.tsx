import type { BoxProps } from "@/Box/types";
import * as React from "react";
import { css } from "@styled-system/css";
import { styled, Grid } from "@styled-system/jsx";

const styles = (isBorderless: boolean) =>
  css({
    backgroundColor: "gainsboro",
    borderRadius: isBorderless ? "0px" : "9999px",
    fontSize: "13px",
    padding: "10px 15px",
    _before: { content: '"👋"' },
    _hover: {
      color: "red",
    },
  });

export const Box: React.FC<BoxProps> = () => {
  const [isBorderless, setIsBorderless] = React.useState(false);

  return (
    <Grid gridTemplateColumns={2}>
      <styled.button
        bg="blue.500"
        cursor="pointer"
        onClick={() => {
          setIsBorderless(!isBorderless);
        }}
      >
        Button
      </styled.button>

      <div className={styles(isBorderless)}>FRAME</div>
    </Grid>
  );
};
