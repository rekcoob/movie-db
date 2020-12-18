import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

export const Spinner: React.FC = () => {
	return (
		<div className="center my-3">
			<Spin indicator={antIcon} />
		</div>
	);
};
