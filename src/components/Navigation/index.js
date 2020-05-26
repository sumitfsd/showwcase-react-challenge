import { connect } from 'react-redux'
import Navigation from './Navigation'
import { toggleNavigation } from './reducer'

const mapStateToProps = ({ navigation }) => ({
  isCollapsed: navigation.isCollapsed
})

const mapDispatchToProps = dispatch => ({
  toggleNavigation: () => dispatch(toggleNavigation()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Navigation)


