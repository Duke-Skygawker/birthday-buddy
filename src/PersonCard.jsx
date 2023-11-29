const PersonCard = ({ image, name, age }) => {
  return (
    <div className="person">
      <img src={image} alt={name} className="img" />
      <span>
        <h4>{name}</h4>
        <p>
          turns <span className="age">{age}</span> today
        </p>
      </span>
    </div>
  );
};
export default PersonCard;
