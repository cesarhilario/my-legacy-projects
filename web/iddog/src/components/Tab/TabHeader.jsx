import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './Tab.css';

import { selectTab, showTabs } from './TabActions';
import { getFeed } from '../../pages/Feed/FeedActions';

class TabHeader extends Component {
    showTab(target) {
        const { selectTab, showTabs, getFeed } = this.props;
        selectTab(target);
        showTabs(target);
        getFeed(target.replace('tab', '').toLowerCase())
    }


    render() {
        const selected = this.props.tab.selected === this.props.target;

        return (
            <li className={selected ? 'active' : ''}>
                <span onClick={ () => this.showTab(this.props.target)}>
                    { this.props.label }
                </span>
            </li>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab });
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, getFeed }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);