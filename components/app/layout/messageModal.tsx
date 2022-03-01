import Image from 'next/image'
import Modal from 'react-modal'

import { useAppDispatch, useAppSelector } from '@/store/app/hooks'
import { hideMessage } from '@/store/features/uiSlice'
import styles from '@/styles/components/app/layout/messageModal.module.scss'
import ModalCloseButton from '@/components/forms/closeButton'

const MessageModal = () => {
	const dispatch = useAppDispatch()
	const { message } = useAppSelector((state) => state.ui)

	const onRequestClose = () => {
		dispatch(hideMessage())
	}

	return (
		<Modal
			isOpen={!!message}
			onRequestClose={onRequestClose}
			overlayClassName={styles.overlay}
			className={styles.content}
		>
			{message && message.type === 'success' && (
				<>
					<div className={styles.messageIcon}>
						<Image
							src="/assets/success.svg"
							alt="success"
							layout="fill"
						/>
					</div>
					<p className={styles.message}>{message.text}</p>
				</>
			)}
			<ModalCloseButton onClick={onRequestClose} />
		</Modal>
	)
}

export default MessageModal
