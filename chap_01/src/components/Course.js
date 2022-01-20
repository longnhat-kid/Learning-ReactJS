import React from 'react'
import Lesson from './Lesson'
class Course extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isShowOutline: true,
        }
        this.emailRef = React.createRef()
        this.passwordRef = React.createRef()
        this.showCourseDetails = this.showCourseDetails.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleToggleOutline = this.handleToggleOutline.bind(this)
    }

    showCourseDetails(isFree){
        if(isFree){
            return (<div className="card-footer">
                        <button onClick={()=>this.handleClick('aaa')} className="btn btn-primary" type="button">Register</button>
                    </div>)
        }
        else{
            return (<form action="/action_page.php">
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" className="form-control" placeholder="Enter email" id="email" ref={this.emailRef}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" placeholder="Enter password" id="pwd" ref={this.passwordRef}/>
                        </div>
                        <div className="form-group form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox"/> Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    </form>)
        }
    }
    
    handleClick(e) {
        console.log(e)
    }

    handleSubmit(e){
        e.preventDefault()
        console.log("email", this.emailRef.current.value)
        console.log("password", this.passwordRef.current.value)
    }

    handleToggleOutline(){
        this.setState({
            isShowOutline: !this.state.isShowOutline
        })
    }
    render() {
        return (
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-header bg-primary">
                        {this.props.name}
                    </div>
                    <div className="card-body">
                        <p>{this.children}</p>
                        <p><button type="submit" className="btn btn-success" onClick={this.handleToggleOutline}>Toggle Outline</button></p>
                        {this.state.isShowOutline ? 
                            <ul className="list-group">
                                <Lesson/>
                                <Lesson/>
                                <Lesson/>
                            </ul>
                        :   undefined}
                        
                    </div>
                    <div className="card-footer">
                        {this.showCourseDetails(this.props.isFree)}
                    </div>
                </div>	
            </div>
        )
    }
}

export default Course