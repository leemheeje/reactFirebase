import React from 'react';
import classnames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classnames.bind(styles);
const Button = ({
	touchableopacity,
	icon = '',
	className,
	children,
	...anther
}) => {
	console.log(className);
	return (
		<button {...anther} className={touchableopacity ? cx('touchableopacity', className) : cx('btn', className)}>
			{icon ? <span className={cx('icon')}>{icon}</span> : ''}
			<span className={cx('txt')}>{children}</span>
		</button>
	)
}
export default Button;