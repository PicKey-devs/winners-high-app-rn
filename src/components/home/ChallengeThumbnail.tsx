import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ChallengeThumbnail({
	imgUrl,
	size,
}: {
	imgUrl?: string;
	size?: number;
}) {
	return (
		<ThumbnailItemView size={size}>
			<LinearGradient
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				start={[0, 0]}
				colors={['#9CC1FA', '#C9E5FB', '#9EC2FA', '#538EF4']}
			>
				<InnerCircle size={size}>
					<Image
						style={{
							width: '100%',
							height: '100%',
							borderRadius: 50,
						}}
						source={{
							uri:
								imgUrl ??
								'https://fastly.picsum.photos/id/328/200/300.jpg?hmac=rUU8GIGsrhqhqkiTi6qIQXtGstAUmnv4yV1bc_Sns7w',
						}}
					/>
				</InnerCircle>
			</LinearGradient>
		</ThumbnailItemView>
	);
}

const ThumbnailItemView = styled.View`
	width: ${(props: any) => props.size || 89};
	height: ${(props: any) => props.size || 89};
	border-radius: 50;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	margin-right: 16px;
`;

const InnerCircle = styled.View`
	width: ${(props: any) => props.size - 5 || 80};
	height: ${(props: any) => props.size - 5 || 80};
	border-radius: 50;
	border: ${(props: any) => (props.size ? 1 : 3)}px solid #fff;
	background-color: #fff;
`;
