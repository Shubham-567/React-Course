import profilePic from "./assets/placeholder.jpg";

function Card() {
  const title = "Shubham";
  const description =
    "I am a BCA student and In my free time i like to learn Japanese.";
  return (
    <div className='card'>
      <img className='card-image' src={profilePic} alt='profile picture'></img>
      <h1 className='card-title'>{title}</h1>
      <p className='card-text'>{description}</p>
    </div>
  );
}

export default Card;
