import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default function Navigation(props) {
    const style = {
      backgroundColor: "#c8e6c9",
    };

    return (
      <Toolbar style={style}>
        <ToolbarGroup>
          <ToolbarTitle text="RAX CHALLENGE" />
            <FontIcon className="muidocs-icon-custom-sort" />
            <ToolbarSeparator />
        </ToolbarGroup>
      </Toolbar>
    );
}
