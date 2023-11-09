import styles from './Scoreboard.module.css'
import PropTypes from 'prop-types'

export const Scoreboard = ({ move, winner, draw }) => {
	return (
		<div className={styles.scoreboard}>
			<p className={styles.move}>
				{draw && !winner ? 'Ничья!' : ''}
				<span>
					{winner ?? draw ? '' : move ? 'Ходят крестики' : 'Ходят нолики'}
				</span>
			</p>
			<p className={styles.victory}>
				{winner === 'X'
					? 'Победили крестики!'
					: winner === 'O'
					? 'Победили нолики!'
					: ''}
			</p>
		</div>
	)
}

Scoreboard.propTypes = {
	move: PropTypes.bool,
	winner: PropTypes.string,
	draw: PropTypes.bool
}
