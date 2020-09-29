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
					<div className="col8">
						{
							[0, 0, 0, 0, 0, 0, 0].map((item, index) => (
								<Item className={cx('MB15')} key={index}>
									<Item.UserInformation className={cx('itemWrapInUserInfo')}/>
									<Item.Thumbnail />
									<Item.DetailInformation />
									<Item.Comment />
								</Item>
							))
						}
					</div>
					<div className="col4">
						<div className={cx('sidearea')}>
							<Item.UserInformation size="lg" title="asdfasdfasd" description="asdf" />
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}
export default Main;