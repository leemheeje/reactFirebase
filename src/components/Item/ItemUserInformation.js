import React from 'react';
import classnames from 'classnames/bind';
import styles from './ItemUserInformation.module.scss';
import {VscAccount} from 'react-icons/vsc';

const cx = classnames.bind(styles);
const ItemUserInformation = ({
	profile = '//image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
	title = '타이틀을 입력해주세요.',
	subject = '제목을 입력해주세요.',
	className,
}) => {
	return (
		<div className={cx('itemUserInfoWrap', className)}>
			<div className={cx('itemUserInfoInner')}>
				<span className={cx('itemUserprofile')} style={{
					backgroundImage: `url(${profile})`
				}}></span>
				<div className={cx('itemUserTxts')}>
					<div className={cx('tt')}>{title}</div>
					<div className={cx('st')}>{subject}</div>
				</div>
			</div>
		</div>
	)
}
export default ItemUserInformation;