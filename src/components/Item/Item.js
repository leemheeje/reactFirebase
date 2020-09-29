import React from 'react';
import classnames from 'classnames/bind';
import styles from './Item.module.scss';
import ItemUserInformation from './ItemUserInformation';
import ItemThumbnail from './ItemThumbnail';
import ItemDetailInformation from './ItemDetailInformation';
import ItemComment from './ItemComment';

const cx = classnames.bind(styles);
const Item = ({
	userInformation = false,
	thumbnail = false,
	detailInfomation = false,
	comment = false,
	children,
	className = '',
}) => {
	return (
		<div className={cx('itemWrap', className)}>
			<div className={cx('itemInner')}>
				{/* {userInformation ? <ItemUserInformation className={cx('itemWrapInUserInfo')}/> : ''}
				{thumbnail ? <ItemThumbnail /> : ''}
				{detailInfomation ? <ItemDetailInformation /> : ''}
				{comment ? <ItemComment /> : ''} */}
				{children}
			</div>
		</div>
	)
}
Item.UserInformation = ItemUserInformation;
Item.Thumbnail = ItemThumbnail;
Item.DetailInformation = ItemDetailInformation;
Item.Comment = ItemComment;
export default Item;