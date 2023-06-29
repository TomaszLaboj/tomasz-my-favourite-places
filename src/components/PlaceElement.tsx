interface PlaceElementProps {
  name: string;
  location: string;
  description: string;
}

function PlaceElement(props: PlaceElementProps): JSX.Element {
  return (
    <ul>
      <li>
        <h3>{props.name}</h3>
      </li>
      <li>{props.location}</li>
      <li>{props.description}</li>
    </ul>
  );
}

export default PlaceElement;
