import React from 'react'
import * as actions from '../actions/index'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
	strSearch: state.strSearch
})

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleSearchClick: (keyword) => dispatch(actions.actGoSearch(keyword)),
		handleClearClick: () => dispatch(actions.actClearSearch())
	}
}

const connector = connect(mapStateToProps, mapDispatchToProps)

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            strSearch: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            strSearch: e.target.value
        })
    }

    onGoSearch = (keyword) => {
		this.props.handleSearchClick(keyword)
	}

	onClearSearch = () => {
		this.props.handleClearClick()
        this.setState({
            strSearch: ''
        })
	}

    handleEnter = (e) => {
        if(e.keyCode === 13) this.onGoSearch(this.state.strSearch)
    }

	render(){
        let strSearch = this.state.strSearch || this.props.strSearch
		return (
			<div className="col-lg-4 mb-3--modified">
                <div className="input-group">
                    <input className="form-control" type="text" name="search-input" placeholder="Search for..." value = {strSearch} onChange={this.handleChange} onKeyUp={(e) => {this.handleEnter(e)}}/>
                    <div className="input-group-append">
                        <button className="btn btn-dark" type="button" onClick={() => {this.onClearSearch()}}>Clear!</button>
                        <button className="btn btn-primary" type="button" onClick={(e) => {this.onGoSearch(this.state.strSearch)}}>Search!</button>
                    </div>
                </div>
			</div>
		);
	}
}


export default connector(Search);
