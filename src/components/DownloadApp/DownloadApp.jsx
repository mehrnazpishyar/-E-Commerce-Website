import mobile from "../../../public/mobile.png";
import iphone from "../../../public/iphone.png";
import android from "../../../public/android.png";
import { Link } from "react-router-dom";


const DownloadApp = () => {
  return (
    <div className="download-section container">
      <div className="main">
        <div className="right">
        <h1>Download Our Awesome App</h1>
        <p>Experience the best features by downloading our app today!</p>
        <div className="download-options">
            <div className="option">
         
                <Link to="#">
                    <img src={iphone} alt="iOS App Icon"/>
                </Link>
            </div>

            <div className="option">
              
                <Link to="#">
                    <img src={android} alt="Android App Icon"/>
                </Link>
            </div>
        </div>

        </div>
        <div className="left">
          <img src={mobile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
