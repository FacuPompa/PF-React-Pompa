import "./button.scss";

function Button(props) {
  const stylesButton = {
    backgroundColor: props.color || "orange",
    color: "white",
    padding: "4px 10px",
    borderRadius: "8px",
  };

  return (
    <Button className="btn" style={stylesButton} onClick={props.onTouchButton}>
      {props.children}
    </Button>
  );
}

export default Button;
