const BurgerElement = ({ isMenuOpen, onClick }) => (
      <div
            className="navbar-burger"
            data-target="navMenu"
            role="menuitem"
            tabindex="0"
            onClick={onClick}
      >
            <div
                  className="hamburger-react"
                  aria-expanded="false"
                  role="button"
                  tabindex="0"
                  style={{
                        cursor: "pointer",
                        height: "48px",
                        position: "relative",
                        transition: "0.4s cubic-bezier(0, 0, 0, 1)",
                        userSelect: "none",
                        width: "48px",
                        outline: "none",
                        transform: "none",
                        color: isMenuOpen ? "white" : "#4a4a4a",
                  }}
            >
                  <div
                        style={{
                              background: "currentcolor",
                              height: "2px",
                              left: "12px",
                              position: "absolute",
                              width: "24px",
                              top: "16px",
                              transition: "0.4s cubic-bezier(0, 0, 0, 1)",
                              transform: "none",
                        }}
                  ></div>
                  <div
                        style={{
                              background: "currentcolor",
                              height: "2px",
                              left: "12px",
                              position: "absolute",
                              width: "24px",
                              top: "23px",
                              transition: "0.4s cubic-bezier(0, 0, 0, 1)",
                              transform: "none",
                        }}
                  ></div>
                  <div
                        style={{
                              background: "currentcolor",
                              height: "2px",
                              left: "12px",
                              position: "absolute",
                              width: "24px",
                              top: "30px",
                              transition: "0.4s cubic-bezier(0, 0, 0, 1)",
                              transform: "none",
                        }}
                  ></div>
            </div>
      </div>
);

export default BurgerElement;
