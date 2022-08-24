import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './Feed.css';

import Exit from '../../components/Exit/Exit';
import FeedContent from './FeedContent';
import Tabs from '../../components/Tab/Tabs';
import TabsHeader from '../../components/Tab/TabsHeader';
import Tab from '../../components/Tab/Tab';
import TabHeader from '../../components/Tab/TabHeader';
import TabsContent from '../../components/Tab/TabsContent';
import If from '../../operators/If/If';

import  {  getFeed, openImage, showImage, logout, init } from './FeedActions';

class Feed extends Component {
    closeSlide() {
        const { openImage } = this.props;
        openImage();
    }

    exit() {
        const { logout } = this.props;
        logout();
    }

    render() {
        const { show, opened, path, tab } = this.props;

        if (show) {
            return (
                <div className='wrapper'>
                    <h1>The <strong>Iddog</strong></h1>
                    <TabsHeader>
                        <TabHeader label='Husky' target='tabHusky'/>
                        <TabHeader label='Labrador' target='tabLabrador'/>
                        <TabHeader label='Hound' target='tabHound'/>
                        <TabHeader label='Pug' target='tabPug'/>
                    </TabsHeader>
                    <div className='image' onClick={e => { this.closeSlide() }}>
                        <img src={path} alt={path} />
                    </div>
                </div>
            );
        }

        if (opened) {
            return (
                <div className='wrapper'>
                    <h1>The <strong>Iddog</strong></h1>
                    <TabsHeader>
                        <TabHeader label='Husky' target='tabHusky'/>
                        <TabHeader label='Labrador' target='tabLabrador'/>
                        <TabHeader label='Hound' target='tabHound'/>
                        <TabHeader label='Pug' target='tabPug'/>
                    </TabsHeader>
                    <img src={path} alt={path} />
                </div>
            );
        }

        return (
            <div className='wrapper'>
                <Exit onClick={() => { this.exit() }} />
                <h1>The <strong>Iddog</strong></h1>
                <Tabs>
                    <TabsHeader>
                        <TabHeader label='Husky' target='tabHusky'/>
                        <TabHeader label='Labrador' target='tabLabrador'/>
                        <TabHeader label='Hound' target='tabHound'/>
                        <TabHeader label='Pug' target='tabPug'/>
                    </TabsHeader>
                    <If test={!tab.selected}>
                        <h2>Choose a feed</h2>
                    </If>
                    <TabsContent>
                        <Tab id='tabHusky'>
                            <FeedContent />
                        </Tab>
                        <Tab id='tabLabrador'>
                            <FeedContent />
                        </Tab>
                        <Tab id='tabHound'>
                            <FeedContent />
                        </Tab>
                        <Tab id='tabPug'>
                            <FeedContent />
                        </Tab>
                    </TabsContent>
                </Tabs>
            </div>
        );
    }
}

const mapStateToProps = state => ({ path: state.feed.path,  opened: state.feed.opened, show: state.feed.show, tab: state.tab });
const mapDispatchToProps = dispatch => bindActionCreators({ openImage, showImage, logout, init, getFeed }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Feed);