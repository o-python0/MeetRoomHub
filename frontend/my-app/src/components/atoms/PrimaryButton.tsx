import { Button } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  onClick: () => void;
  children: ReactNode;
};

export const PrimaryButton: FC<Props> = (props) => {
  const { onClick, children } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      w="50%"
      _hover={{
        bg: "teal.500",
      }}
      onClick={onClick}
    >
      ログイン
    </Button>
  );
};
