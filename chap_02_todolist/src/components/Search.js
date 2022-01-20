import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.handleClear = this.handleClear.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
        this.strSearchRef = React.createRef()
    }

    handleClear(input){
        input.value = ''
    }

    handleEnter(e){
        if(e.code === 'Enter'){
            this.props.onSearchBtnClick(this.strSearchRef.current.value)
        }
    }

	render(){
		return (
			<div className="col-lg-4 mb-3--modified">
                <div className="input-group">
                    <input className="form-control" type="text" name="search-input" placeholder="Search for..." ref={this.strSearchRef} onKeyUp={(e) => {this.handleEnter(e)}}/>
                    <div className="input-group-append">
                        <button className="btn btn-dark" type="button" onClick={() => {this.handleClear(this.strSearchRef.current)}}>Clear!</button>
                        <button className="btn btn-primary" type="button" onClick={() => {this.props.onSearchBtnClick(this.strSearchRef.current.value)}}>Search!</button>
                    </div>
                </div>
			</div>
		);
	}
}


export default Search;
