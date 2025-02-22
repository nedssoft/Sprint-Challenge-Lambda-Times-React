import React from 'react';
import propTypes from 'prop-types'

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      let selectedClass = 'tab'
      if (props.tab === props.selectedTab) {
        selectedClass = 'tab active-tab'
      }
      console.log(selectedClass)
  return (
    <div
      className={selectedClass}
      onClick={() => props.selectTabHandler(props.tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: propTypes.string.isRequired,
  selectTabHandler: propTypes.func.isRequired
}
export default Tab;
