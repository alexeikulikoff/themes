import { connect } from 'react-redux';
import MessageBox from '../components/MessageBox';


const mapStateToProps = function(state, ownProps){
    console.log(ownProps)  ;
     console.log(state)  ;
     return {
        text : state.btnReducer.text + ' ' + state.btnReducer.id
        }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => console.log('vbbbb')
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBox)
