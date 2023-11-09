import styles from './Cell.module.css'
import PropTypes from 'prop-types'

export const Cell = ({ click, value }) => {
	return (
		<div className={styles.cell} onClick={click}>
			{value}
		</div>
	)
}

Cell.propTypes = {
	click: PropTypes.func,
	value: PropTypes.string
}
