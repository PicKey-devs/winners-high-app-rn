import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const ToggleButton = styled.TouchableOpacity`
	border-radius: 10px;
	color: white;
	padding: 5.5px 12px 8px 13px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #eaf6ff;
	border: 2px solid #538ef4;
	border-radius: 50px;
	align-self: 'flex-start';
	font-weight: bold;
`;

export const ToggleItem = ({ name }: any) => {
	return (
		<ToggleButton>
			<Text>{name}</Text>
		</ToggleButton>
	);
};
