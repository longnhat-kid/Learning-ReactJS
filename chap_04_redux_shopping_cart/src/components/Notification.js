import React from 'react'

class Notification extends React.Component {
    render() {
        return (
            <tr>
                <td colSpan={6}>
                    <div className="alert alert-success alert-dismissible mb-0">
                        <button type="button" className="close" data-dismiss="alert">×</button>
                        <strong>{this.props.content}</strong>
                    </div>
                </td>
            </tr>
        );
    }
}


export default Notification;