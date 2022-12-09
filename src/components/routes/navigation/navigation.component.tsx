import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
// import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import CartIcon from "../../cart-icon/cart-icon.component";

import { selectIsCartOpen } from "../../../store/cart/cart.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles.js";
import { signOutStart } from "../../../store/user/user.action";

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  // const { isCartOpen } = useContext(CartContext);
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
