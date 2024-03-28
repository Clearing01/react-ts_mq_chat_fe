import React from 'react';
import CustomLayout from 'components/CustomLayout';
import 'styles/reset.scss';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from 'store/userInfo';
const UserInfo = (): JSX.Element => {
	const array = [
		{ id: 1, label: '1번 스토어 설정 ', storeItem: { name: '사자', age: 20 } },
		{ id: 2, label: '2번 스토어 설정 ', storeItem: { name: '호랑이', age: 30 } },
	];
	const dispatch = useDispatch();
	const user = useSelector((user: any) => user.userInfo.user);

	return (
		<>
			<CustomLayout>
				<Typography variant="h3">이름:{user.name} </Typography>
				<Typography variant="h3">나이:{user.age} </Typography>
				{array.map((item) => {
					return (
						<Button
							key={item.id}
							variant="contained"
							sx={{ width: 600, height: 100, mt: '10px' }}
							onClick={() => {
								dispatch(updateUser(item.storeItem));
							}}
						>
							<Typography variant="h3">{item.label}</Typography>
						</Button>
					);
				})}
			</CustomLayout>
		</>
	);
};
export default UserInfo;
