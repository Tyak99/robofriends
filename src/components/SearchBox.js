import React from "react";



const SearchBox = (searchfield) => {
	return (
		<div className="pa2">
			<input onChange = {searchfield.changed } className = "ba b--green bg-lightest-blue" type="input" placeholder = "search robots"/>
		</div>
	);
}

export default SearchBox;