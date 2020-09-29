import React from 'react';
import Item from '../../components/Item';

import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);
const Main = ({ }) => {
	return (
		<div className={cx('container')}>
			<div className={cx('innerWrap')}>
				<div className="row">
					{
						[0,0,0,0,0,0,0].map(item=><div className="col4"><Item userInformation={false} /></div>)
					}
				</div>
				
			</div>
		</div>
	)
}
export default Main;