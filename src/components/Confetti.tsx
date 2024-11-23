import PropTypes from 'prop-types'
import React from 'react'
import Confetti from 'react-dom-confetti'

const config = {
	angle: 90,
	spread: 360,
	startVelocity: 40,
	elementCount: 70,
	dragFriction: 0.12,
	duration: 3000,
	stagger: 3,
	width: '10px',
	height: '10px',
	perspective: '500px',
	colors: ['#000', '#AFFC41']
}

const ConfettiComponent = ({ active }) => {
	console.log(active)
	return <Confetti active={active} config={config} />
}

ConfettiComponent.propTypes = {
	active: PropTypes.bool.isRequired
}

export default ConfettiComponent

