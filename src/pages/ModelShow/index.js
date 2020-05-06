import React, { memo, Fragment, useEffect, useState } from 'react';
import { message } from 'antd';
import api from '../../api/request';
import { statusCode } from '../../config';

const ModelShow = () => {
	const [modelPath, setModelPath] = useState(null);

	useEffect(() => {
		api
			.getModelInfo()
			.then(({ code, data, msg }) => {
				if (Number.parseInt(code) === statusCode.success) {
					if (data) {
						const url = data.url;
						if (url) {
							setModelPath(url);
						} else {
							message.warn('模型路径不存在');
						}
					} else {
						message.warn('模型路径不存在');
					}
					return;
				}

				message.error(msg || '模型信息获取失败');
			})
			.catch(error => {
				console.log(error);
				message.error('模型信息获取失败');
			});
	}, []);

	useEffect(() => {
		if (!modelPath) return;
		const root = document.querySelector('#root');
		// const path = `${process.env.PUBLIC_URL}/model/340_2b1587dd-1824-4edb-b430-791ff891e506/3d.svf`;

		const docs = [
			{
				path: modelPath,
				name: 'Scene',
			},
		];

		const options = {
			docid: docs[0].path,
			env: 'Local',
		};

		let oViewer = new window.Autodesk.Viewing.Private.GuiViewer3D(root, {}); // With toolbar
		window.Autodesk.Viewing.Initializer(options, function () {
			oViewer.initialize();
			oViewer.load(options.docid);
			oViewer.addEventListener(window.Autodesk.Viewing.GEOMETRY_LOADED_EVENT, function () {
				// cb(oViewer)
			});
		});

		return () => {
			root.innerHTML = '';
		};
	}, [modelPath]);

	return <Fragment />;
};

export default memo(ModelShow);
