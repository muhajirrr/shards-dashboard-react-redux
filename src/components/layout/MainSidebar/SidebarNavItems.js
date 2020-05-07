import React from "react";
import { Nav } from "shards-react";
import { connect } from "react-redux";

import SidebarNavItem from "./SidebarNavItem";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({
      ...this.state,
    });
  }

  render() {
    const { navItems: items } = this.props;
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {items.map((item, idx) => (
            <SidebarNavItem key={idx} item={item} />
          ))}
        </Nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  navItems: state.sidebar.navItems
});

export default connect(mapStateToProps)(SidebarNavItems);
