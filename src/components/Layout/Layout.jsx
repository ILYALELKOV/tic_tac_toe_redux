import styles from './Layout.module.css'
import { Scoreboard } from '../ Scoreboard/ Scoreboard.jsx'
import { useEffect, useState } from 'react'
import { Board } from '../Board/Board.jsx'
import { calculation } from '../../calculation.js'
import { store } from '../../store.js'

export const Layout = () => {
	const [xIsNext, setXIsNext] = useState(true)

	const board = store.getState()

	const winner = calculation(board)

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setXIsNext(!xIsNext)
		})

		return () => {
			unsubscribe()
		}
	}, [xIsNext])

	const handleClick = (index) => {
		const boardCopy = [...board]
		if (winner || boardCopy[index]) return
		boardCopy[index] = xIsNext ? 'X' : 'O'
		store.dispatch({ type: 'CURRENT_BOARD', payload: boardCopy })
		setXIsNext(!xIsNext)
	}

	const newGame = () => {
		store.dispatch({ type: 'NEW_GAME' })
	}

	const isDraw = (array) => {
		return array.every((item) => item !== '')
	}

	const draw = isDraw(board)

	return (
		<>
			<Scoreboard move={xIsNext} winner={winner} draw={draw} />
			<Board board={board} click={handleClick} />
			<button className={styles.button} onClick={newGame}>
				Начать игру заново
			</button>
		</>
	)
}
