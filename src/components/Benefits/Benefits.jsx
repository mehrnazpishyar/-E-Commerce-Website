import { benefits } from "../../constants";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="container-box">
        {benefits.map((item) => {
          return (
            <div className="box" key={item.title}>
              <div className="icon">{<item.icon/>}</div>
              <div className="detail">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
