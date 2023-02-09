import burgerMenuIcon from '../assets/burgerMenuIcon.svg'

type Props = {
  toggle:() => void
}

function BurgerMenuButton({toggle}: Props) {

  return (
    <button className="burger" onClick={toggle}>
      <img src={burgerMenuIcon} alt="" />
    </button>
  );
}

export default BurgerMenuButton;
