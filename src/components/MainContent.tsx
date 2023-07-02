import PlaceElement from "./PlaceElement";
import panshangerpark from "../images/panshangerpark.jpg";
import blackrocksands from "../images/blackrocksands.jpg";
import london from "../images/london.jpg";
import poland from "../images/poland-krakow.jpg";
import "./myStyles.css";

function MainContent(): JSX.Element {
  return (
    <main>
        
      <PlaceElement
        imagename={panshangerpark}
       
        name={"Panshanger Park"}
        location={"Hertford, Hertfordshire, UK"}
        description={
          "Good for walks, running, dog walking, cycling and even horse riding."
        }
      />
     
      <PlaceElement
        imagename={blackrocksands}
        
        name={"Black Rock Sands"}
        location={"Snowdonia, Wales, UK"}
        description={"Beatiful beach where you can park your car on."}
      />
      
      <PlaceElement
        imagename={london}
       
        name={"London"}
        location={"England,UK"}
        description={"The capital and largest city of England and the UK."}
      />
      
      <PlaceElement
      imagename={poland}
     
        name={"Poland"}
        location={"Europe"}
        description={"A country in Central Europe."}
      />
    </main>
  );
}

export default MainContent;
