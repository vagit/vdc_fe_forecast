import PropTypes from 'prop-types'
import loadingSrc from 'assets/loading.gif'
import styles from './index.module.css'

const Loading = (props) => 
  props.show ? (
    <div className={styles.LoadingContainer}><img className={styles.Loading} src={loadingSrc} /></div>
  ) : null

Loading.propTypes = {
  show: PropTypes.bool.isRequired
}

Loading.defaulProps = {
  show: false
}

export default Loading
