function ProfilePic() {
  const imageUrl = "./src/assets/profilePic.jpg";

  const styles = {
    display: "block",
    width: "300px",
    border: "1px solid #fff",
    borderRadius: "20px",
    cursor: "pointer",
    margin: "40px 0",
  };

  const handleClick = (e) => (e.target.style.display = "none");
  return (
    <img
      style={styles}
      onClick={(e) => handleClick(e)}
      src={imageUrl}
      alt='profile picture'
    />
  );
}

export default ProfilePic;
