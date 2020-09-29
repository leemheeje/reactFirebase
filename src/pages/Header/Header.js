import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '../../components/Button';
import { VscSearch, VscHeart, VscAccount } from 'react-icons/vsc';

const cx = classNames.bind(styles);
const Header = ({ }) => {
	return (
		<div className={cx('header')}>
			<div className={cx('container')}>
				<div className={cx('innerWrap')}>
					<Button touchableopacity={true} className={cx('logo')} title="로고"></Button>
					<div className={cx('btnGroup')}>
						<Button touchableopacity={true} className={`tp1 ${cx('buttonIcon')}`}>
							<VscHeart />
						</Button>
						<Button touchableopacity={true} className={`tp1 ${cx('buttonIcon')}`}>
							<VscAccount />
						</Button>
						<Button touchableopacity={true} className={`tp1 ${cx('buttonIcon')}`}>
							<VscSearch />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Header;