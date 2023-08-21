import {
	ModalProps as NativeModalProps,
	Modal as NativeModal,
	View,
} from 'react-native';
import Button from './Button';
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface ModalProps
	extends Pick<NativeModalProps, 'visible' | 'onRequestClose' | 'children'> {}

export function Modal({ visible, onRequestClose, children }: ModalProps) {
	return (
		<NativeModal
			transparent
			visible={visible}
			onRequestClose={(event) => {
				if (onRequestClose) {
					onRequestClose(event);
				}
			}}
		>
			<View className="flex-1 justify-center items-center bg-black/60 px-[35px]">
				<View className="rounded-20 overflow-hidden w-full bg-white">
					{children}
				</View>
			</View>
		</NativeModal>
	);
}

Modal.Header = function ({
	children,
	textClassName,
}: {
	children: ReactNode;
	textClassName?: string;
}) {
	return (
		<View
			className={twMerge('border-b border-grey-#f2f2f2 p-6', textClassName)}
		>
			{children}
		</View>
	);
};

interface ConfirmModalProps extends ModalProps {
	confirmTitle?: string;
	onConfirmPress?: VoidFunction;
	onCancelPress?: VoidFunction;
}

const ConfirmModalContext = createContext<
	| [
			ConfirmModalProps | null,
			React.Dispatch<React.SetStateAction<ConfirmModalProps | null>>,
	  ]
	| null
>(null);

export const useConfirmModalContext = () => {
	const confirmModalContext = useContext(ConfirmModalContext);

	if (confirmModalContext === null) {
		throw new Error(
			'useConfirmModal hook은 ConfirmModal.Root 안에서만 사용되어야 합니다',
		);
	}

	return confirmModalContext;
};

export function ConfirmModal() {
	const [confirmModal, setConfirmModal] = useConfirmModalContext();

	if (confirmModal === null) {
		return null;
	}

	const {
		children,
		confirmTitle = '확인',
		onConfirmPress,
		onCancelPress,
		onRequestClose,
		visible,
	} = confirmModal;

	return (
		<Modal onRequestClose={onRequestClose} visible={visible}>
			{children}
			<View className="flex-row p-[10px]">
				<Button
					title={confirmTitle}
					variant="secondary"
					textClassName="flex-1"
					radius={10}
					onPress={() => {
						setConfirmModal(null);
						onConfirmPress?.();
					}}
				/>
				{onCancelPress && (
					<Button
						title="취소"
						variant="quaternary"
						textClassName="flex-1"
						radius={10}
						onPress={() => {
							setConfirmModal(null);
							onCancelPress();
						}}
					/>
				)}
			</View>
		</Modal>
	);
}

ConfirmModal.Root = function ({ children }: { children: ReactNode }) {
	const [confirmModal, setConfirmModal] = useState<ConfirmModalProps | null>(
		null,
	);

	return (
		<ConfirmModalContext.Provider value={[confirmModal, setConfirmModal]}>
			{children}
		</ConfirmModalContext.Provider>
	);
};
