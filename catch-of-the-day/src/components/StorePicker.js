import React from 'react';

class StorePicker extends React.Component {
    // every component you build needs at least one method and that's the render method
	render() {
		return (
            <form className="store-selector">
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store →</button>
            </form>
		)
	}
}

export default StorePicker;
