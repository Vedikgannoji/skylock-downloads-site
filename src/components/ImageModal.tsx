import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ScreenshotItem } from '../types';
import styles from './ImageModal.module.css';

interface ImageModalProps {
  screenshot: ScreenshotItem | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ screenshot, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (screenshot) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [screenshot, onClose]);

  if (!screenshot) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3 id="modal-title" className={styles.modalTitle}>
            {screenshot.title}
          </h3>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close image modal"
          >
            <X size={20} />
          </button>
        </div>
        <div className={styles.modalImageWrapper}>
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            className={styles.modalImage}
          />
        </div>
        <div className={styles.modalFooter}>
          <p>{screenshot.caption}</p>
        </div>
      </div>
    </div>
  );
};
