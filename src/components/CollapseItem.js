import React from 'react';

const CollapseItem = (props) => {
  const displayPanel = (evt) => {
    props.handleCollapse(evt.currentTarget.id)
  }
  return (
    <div className={`containerFillInTop collapse-item ${props.activePanel === props.id ? "active": ""}`}>
      <header className="subContainer" id={props.id} onClick={displayPanel} >
        <span>
          <i className={`icon ${props.icon}`}></i>
          <span className={`title ${props.darkMode === true ? "dark" : "light"}`}>{props.title}</span>
        </span>
          <i className={`iconDirection2 fas fa-chevron-down ${props.activePanel === props.id ? "arrow-rotate": ""}`}></i>
      </header>
      <div className="containerFillInBottom">
        {props.children}
      </div>
    </div>
  );
}

export default CollapseItem;