import React from 'react';

import { connect } from 'react-redux';

class Somepage extends React.Component{
	render(){
		return(
			<h1>
			Somepage{this.props.name}
			</h1>
		)
	}
}
function mapStateToProps(state) {
  return{
    name: state.Info.name
  }
}
export default connect(mapStateToProps)(Somepage)