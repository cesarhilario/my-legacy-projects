import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../../components/Grid/Grid';

import { showImage, setPath } from './FeedActions';

class FeedContent extends Component {
    showImage(path) {
        const { showImage, setPath } = this.props;
        
        setPath(path);
        showImage();
    }
    
    render() {
        const { list } = this.props;

        return (
            <Grid cols='3 1'>
                {
                    list.map((path, index) => (
                        <img src={path} key={index} onClick={e => this.showImage(path)} alt={path}/>
                    ))
                }
            </Grid>
        );
    }
}

const mapStateToProps = state => ({ list: state.feed.list });
const mapDispatchToProps = dispatch => bindActionCreators({ showImage, setPath }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FeedContent);
