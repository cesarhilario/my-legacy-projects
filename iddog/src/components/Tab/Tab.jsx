import React, { Component } from 'react';
import { connect } from 'react-redux';

import If from '../../operators/If/If';

class Tab extends Component { 
    render() {
        const selected = this.props.tab.selected === this.props.id;
        const visible = this.props.tab.visible[this.props.id];

        return (
            <If test={visible}>
                <div id={this.props.id} className={`${selected ? 'active' : ''}`}>
                    { this.props.children }
                </div>
            </If>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab });

export default connect(mapStateToProps)(Tab);