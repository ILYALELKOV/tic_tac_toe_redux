import styles from './Board.module.css'
import { Cell } from '../Cell/Cell.jsx'
import PropTypes from 'prop-types'
import { store } from '../../store.js'

export const Board = ({ click }) => {
	const board = store.getState()
	return (
		<div className={styles.container}>
			{board.map((square, index) => (
				<Cell key={index} click={() => click(index)} value={square} />
			))}
		</div>
	)
}

Board.propTypes = {
	board: PropTypes.array,
	click: PropTypes.func
}
