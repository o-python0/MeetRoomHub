import { FC, ReactNode } from "react";
import { NavigationBar } from "../organisms/NavigationBar";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
};
