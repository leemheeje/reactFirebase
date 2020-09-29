import React from 'react';
import classnames from 'classnames/bind';
import styles from './ItemThumbnail.module.scss';

const cx = classnames.bind(styles);
const ItemThumbnail = ({
	thumbnails = [
		'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
	]
}) => {
	return (
		<div className={cx('itemTumbnailWrap')}>
			<div className={cx('itemTumbnailInner')}>
				<div className={cx('item')}>
					{
						thumbnails.map(imageURI => <img src={imageURI} alt="" />)
					}
				</div>
			</div>
		</div>
	)
}
export default ItemThumbnail;