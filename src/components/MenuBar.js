import React from "react";

const MenuBar = props => {
	/*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

	return (
		<div className="ui four item menu">
			<a
				className={props.currentSection === "profile" ? "item active" : "item"}
				id="profile"
				onClick={event => props.handleMenuClick(event.target.id)}
			>
				<i className="user large icon" id="profile" />
			</a>

			<a
				className={props.currentSection === "photo" ? "item active" : "item"}
				id="photo"
				onClick={event => props.handleMenuClick(event.target.id)}
			>
				<i className="photo large icon" id="photo" />
			</a>

			<a
				className={props.currentSection === "cocktail" ? "item active" : "item"}
				id="cocktail"
				onClick={event => props.handleMenuClick(event.target.id)}
			>
				<i className="cocktail large icon" id="cocktail" />
			</a>

			<a
				className={props.currentSection === "pokemon" ? "item active" : "item"}
				id="pokemon"
				onClick={event => props.handleMenuClick(event.target.id)}
			>
				<i className=" themeisle large icon" id="pokemon" />
			</a>
		</div>
	);
};

export default MenuBar;
