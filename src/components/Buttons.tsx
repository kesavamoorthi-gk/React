import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  color: string;
}
const Buttons = ({ children, onClick, color }: Props) => {
  return (
    <>
      <button type="button" onClick={onClick} className={"btn btn-" + color}>
        {children}
      </button>
    </>
  );
};

Buttons.propTypes = {};

export default Buttons;
