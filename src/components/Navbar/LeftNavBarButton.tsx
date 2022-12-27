import { ReactElement } from "react";
import "./LeftNavBarButton.css";

interface Props {
  icon: ReactElement;
  text: string;
  onClick?:Function;
}
const LeftNavBarButton = ({ icon, text, onClick}: Props) => {
  return (
    <div className="text-light px-4">
      <div className="rounded select-nav px-2" onClick={onClick?()=>{onClick()}:()=>{}}>
        {icon}
        <label className="m-2">{text}</label>
      </div>
    </div>
  );
};

export default LeftNavBarButton;
