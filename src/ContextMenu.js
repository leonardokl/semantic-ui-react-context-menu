import React, { cloneElement } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Content from "./Content";

const div = document.createElement("div");

class ContextMenu extends React.Component {
  componentWillUnmount() {
    this.unmountContent();
  }

  mountContent = event => {
    const { items, onClick } = this.props;
    const { pageX, pageY } = event;
    const contentProps = {
      items,
      pageX,
      pageY
    };

    document.body.appendChild(div);

    ReactDOM.render(
      <Content
        {...contentProps}
        onClose={this.unmountContent}
        onClick={(evt, item) => {
          this.unmountContent();
          onClick(evt, item);
        }}
      />,
      div
    );
  };

  unmountContent = () => {
    const didUnmount = ReactDOM.unmountComponentAtNode(div);

    if (didUnmount && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };

  handleContextMenu = evt => {
	if (!evt.ctrlKey) {
		this.unmountContent();
	  const { onContextMenu } = this.props;
		evt.stopPropagation();
	  evt.preventDefault();
	  this.mountContent(evt);
	  onContextMenu(evt);
	}
  };

   handleOnClick = evt => {
		this.unmountContent();
  };

  render() {
    const { trigger } = this.props;

    return cloneElement(trigger, {
      onContextMenu: this.handleContextMenu, onClick: this.handleOnClick
    });
  }
}

ContextMenu.propTypes = {
  trigger: PropTypes.node.isRequired,
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onContextMenu: PropTypes.func,
};

ContextMenu.defaultProps = {
  onContextMenu: () => {},
};

export default ContextMenu;
