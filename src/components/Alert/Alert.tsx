import { ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";

interface IProps {
  type:string
  icon:ReactNode;
  title:string
}


const Alert = ({type,icon,title}: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h4 className="text">{title}</h4>
        </div>

        < X className="close" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea veniam
        modi, minus voluptatum fuga. Dolorem ipsa doloremque maxime quos animi
        magnam eligendi impedit sequi, nisi rem aspernatur, autem repudiandae!
      </p>
    </div>
  );
};

export default Alert;
