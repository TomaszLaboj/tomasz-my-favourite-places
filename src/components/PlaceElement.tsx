interface PlaceElementProps {
  name: string;
  location: string;
  description: string;
}

function PlaceElement(props: PlaceElementProps): JSX.Element {
  return (
    <ul>
      
        <h3>{props.name}</h3>
      
      <li>{props.location}</li>
      <li>{props.description}</li>
    </ul>
  );
}

export default PlaceElement;
