import React from 'react';
import classnames from 'classnames/bind';
import styles from './Item.module.scss';
import ItemUserInformation from './ItemUserInformation';
import ItemThumbnail from './ItemThumbnail';
import ItemDetailInformation from './ItemDetailInformation';

const cx = classnames.bind(styles);
const Item = ({
	userInformation = true,
	thumbnail = true,
	detailInfomation = true,
}) => {
	return (
		<div className={cx('itemWrap')}>
			<div className={cx('itemInner')}>
				{userInformation ? <ItemUserInformation className={cx('itemWrapInUserInfo')}/> : ''}
				{thumbnail ? <ItemThumbnail /> : ''}
				{detailInfomation ? <ItemDetailInformation /> : ''}
			</div>
		</div>
	)
}
Item.UserInformation = ItemUserInformation;
Item.Thumbnail = ItemThumbnail;
Item.DetailInformation = ItemDetailInformation;
export default Item;