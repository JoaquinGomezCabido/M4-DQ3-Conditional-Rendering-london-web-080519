import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSection: "profile",
		};
	}

	handleMenuClick = id => {
		this.setState({ currentSection: id });
		return;
	};

	renderSection = id => {
		if (id === "profile") return Profile();
		if (id === "photo") return Photos();
		if (id === "cocktail") return Cocktails();
		if (id === "pokemon") return <Pokemon />;
	};

	render() {
		/*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

		const detailsToDisplay = (
			<div>{this.renderSection(this.state.currentSection)}</div>
		);

		return (
			<div>
				<MenuBar
					currentSection={this.state.currentSection}
					handleMenuClick={this.handleMenuClick}
				/>
				{detailsToDisplay}
			</div>
		);
	}
}

export default MainBox;
