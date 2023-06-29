import PlaceElement from "./PlaceElement";
import panshangerpark from "../images/panshangerpark.jpg";
import blackrocksands from "../images/blackrocksands.jpg";
import london from "../images/london.jpg";
import poland from "../images/poland-krakow.jpg";
import "./myStyles.css"


function MainContent(): JSX.Element {
    return (
            
        
        <main>
            <img src={panshangerpark} alt="Panshanger Park" />
        <PlaceElement
        
            name = {"Panshanger Park"}
            location = {"Hertford, Hertfordshire, UK"}
            description = {"Good for walks, running, dog walking, cycling and even horse riding."}
        
       />
       <img src={blackrocksands} alt="Black Rock Sands" />
        <PlaceElement
        
            name = {"Black Rock Sands"}
            location = {"Snowdonia, Wales, UK"}
            description = {"Beatiful beach where you can park you car on"}
        
       />
       <img src={london} alt="London" />
        <PlaceElement
        
            name = {"London"}
            location = {"England,UK"}
            description = {"The capital and largest city of England and the UK."}
        
       />
       <img src={poland} alt="Poland" />
        <PlaceElement
        
            name = {"Poland"}
            location = {"Europe"}
            description = {"country in Central Europe"}
        
       />
      </main>
      
    ); 
  }

export default MainContent;