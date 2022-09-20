import koda from "img/koda.png";

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <img src={koda} alt="Logo" />
      <h1>{props.course}</h1>
    </div>
  );
};

export default Header;
