import React from "react";
import PropTypes from "prop-types";
import { Menu } from "semantic-ui-react";

const styles = {
  wrapper: {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 99999
  },
  menu: {
    position: "fixed",
    zIndex: 3000,
    width: "auto",
    boxShadow: "0 2px 4px 0 rgba(34,36,38,.12), 0 2px 10px 0 rgba(34,36,38,.15)"
  }
};

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: props.pageY,
      left: props.pageX
    };
  }

  componentDidMount() {
    this.updatePosition();
  }

  updatePosition = () => {
    const { pageX, pageY } = this.props;
    const menu = this.el.querySelector("[data-id=menu]");
    const menuWidth = menu.offsetWidth;
    const menuHeight = menu.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const left =
      windowWidth - pageX < menuWidth ? windowWidth - menuWidth : pageX;
    const top =
      windowHeight - pageY < menuHeight ? windowHeight - menuHeight : pageY;

    if (pageX !== left || pageY !== top) {
      this.setState({ top, left });
    }
  };

  render() {
    const { items, onClose, onClick } = this.props;
    const { top, left } = this.state;

    return (
      <div
        ref={el => {
          this.el = el;
        }}
        style={styles.wrapper}
        onClick={onClose}
        onContextMenu={evt => {
          evt.preventDefault();
          onClose();
        }}
      >
        <Menu
          vertical
          data-id="menu"
          style={{
            ...styles.menu,
            top,
            left
          }}
        >
          {items.map(i => (
            <Menu.Item
              {...i}
              style={{ whiteSpace: "nowrap" }}
              onClick={evt => {
                evt.stopPropagation();
                onClick(evt, i);
              }}
            />
          ))}
        </Menu>
      </div>
    );
  }
}

Content.propTypes = {
  items: PropTypes.array.isRequired,
  pageY: PropTypes.number.isRequired,
  pageX: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Content;
