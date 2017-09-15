import React from 'react';

class PageHeader extends React.Component {
    render() {
      let  icon = "fa fa-"+this.props.icon;
      let gridHead = "col-"+(this.props.gridHead == null ? "md-4" : this.props.gridHead);
        return (
          <div className="row wrapper border-bottom white-bg page-heading">
            <div className={gridHead}>
                <h2><i className={icon}></i> {this.props.title}</h2>
            </div>
            {this.props.children}
          </div>
        )
    }
}

export default PageHeader
