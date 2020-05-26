import React, { forwardRef, useRef, useState, useEffect, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import { ScrollContainer } from './style';

const Scroll = forwardRef((props, ref) => {
	const { direction, click, refresh, bounceTop, bounceBottom } = props;
	const { onScroll } = props;

	const scrollContainerRef = useRef(null);
	const [bScroll, setBScroll] = useState();

	// 实例化一个scroll
	useEffect(() => {
		const scroll = new BScroll(scrollContainerRef.current, {
			scrollX: direction === 'horizental',
			scrollY: direction === 'vertical',
			probeType: 3,
			click: click,
			bounce: {
				top: bounceTop,
				bottom: bounceBottom,
			},
		});

		setBScroll(scroll);

		return () => setBScroll(null);
	}, []);

	// 每次重新渲染都要刷新实例，防止无法滑动
	useEffect(() => {
		if (refresh && bScroll) bScroll.refresh();
	});

	// 给实例绑定scroll事件
	useEffect(() => {
		if (!bScroll || !onScroll) return;
		bScroll.on('scroll', scroll => onScroll(scroll));
		return () => bScroll.off('scroll');
	}, [onScroll, bScroll]);

	useImperativeHandle(ref, () => {
		return {
			// 暴露refresh方法
			refresh() {
				if (bScroll) {
					bScroll.refresh();
					bScroll.scrollTo(0, 0);
				}
			},
			// 暴露提供bScroll实例方法
			getBScroll() {
				if (bScroll) {
					return bScroll;
				}
			},
		};
	});

	return <ScrollContainer ref={scrollContainerRef}>{props.children}</ScrollContainer>;
});

Scroll.defaultProps = {
	direction: 'vertical',
	click: true,
	refresh: true,
	onScroll: null,
	pullUp: null,
	pullDown: null,
	pullUpLoading: false,
	pullDownLoading: false,
	bounceTop: true,
	bounceBottom: true,
};

Scroll.propTypes = {
	direction: PropTypes.oneOf(['vertical', 'horizental']),
	click: true, // 是否支持点击
	refresh: PropTypes.bool, // 是否刷新
	onScroll: PropTypes.func, // 滑动触发的回调函数
	pullUp: PropTypes.func, // 上拉加载逻辑
	pullDown: PropTypes.func, // 下拉加载逻辑
	pullUpLoading: PropTypes.bool, // 是否显示上拉 loading 动画
	pullDownLoading: PropTypes.bool, // 是否显示下拉 loading 动画
	bounceTop: PropTypes.bool, // 是否支持向上吸顶
	bounceBottom: PropTypes.bool, // 是否支持向下吸底
	children: PropTypes.element,
};

export default Scroll;
