import { useState } from "react";
import Logo from "../Logo";
import NavElement from "./NavElement";
import BurgerElement from "./BurgerElement";

const NavMobile = ({ navarray }) => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [openedNavElement, setOpenedNavElement] = useState(null);

      const toggleMenu = () => setIsMenuOpen((currentValue) => !currentValue);
      console.log(openedNavElement);

      const navItemOnClick = (title) => () => {
            const isActive = title === openedNavElement;
            if (isActive) {
                  setOpenedNavElement(null);
            } else {
                  setOpenedNavElement(title);
            }
      };
      return (
            <div className="container navbar-mobile is-hidden-desktop">
                  <div className="navbar-brand">
                        <Logo />
                        <BurgerElement
                              isMenuOpen={isMenuOpen}
                              onClick={toggleMenu}
                        />
                  </div>

                  <div
                        id="navMenu"
                        className="has-background-dark has-text-white"
                        style={{
                              transform: `translateY(${isMenuOpen ? "0" : "-100%"})`,
                        }}
                  >
                        <div className="wrapper wrapper-enter-done">
                              <div className="navbar-menu-mobile">
                                    {navarray.map((item) => (
                                          <NavElement
                                                {...item}
                                                isOpened={
                                                      item.title ===
                                                      openedNavElement
                                                }
                                                onClick={navItemOnClick(
                                                      item.title,
                                                )}
                                          />
                                    ))}
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default NavMobile;
