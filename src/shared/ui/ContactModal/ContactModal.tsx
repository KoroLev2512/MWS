"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../Text';

import styles from './ContactModal.module.scss';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onSuccess }) => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [comment, setComment] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const formData = new FormData();
            formData.append('entry.1768422380', name);
            formData.append('entry.593118863', contact);
            formData.append('entry.2115160305', comment);

            // Отправка в Google Form
            await fetch('https://docs.google.com/forms/d/e/1FAIpQLScnTzvmSyqo9rpOlrk490XoZTjvfeWHfk9XyuD1EroUhFGNpA/formResponse', {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });

            // Очищаем форму
            setName('');
            setContact('');
            setComment('');
            
            // Закрываем модальное окно
            onClose();
            
            // Показываем окно успеха
            onSuccess();
        } catch (error) {
            console.error('Error submitting form:', error);
            // Очищаем форму
            setName('');
            setContact('');
            setComment('');
            
            // Все равно показываем успех, так как из-за no-cors мы не можем получить ответ
            onClose();
            onSuccess();
        }
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
                
                <Text as="h2" className={styles.title}>
                    {t('Contact Form Title')}
                </Text>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.field}>
                        <label htmlFor="name" className={styles.label}>
                            {t('Your Name')} <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className={styles.input}
                            placeholder={t('Enter your name')}
                        />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="contact" className={styles.label}>
                            {t('Your Phone/Email')} <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="contact"
                            type="text"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            required
                            className={styles.input}
                            placeholder={t('Enter your phone or email')}
                        />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="comment" className={styles.label}>
                            {t('Comment')}
                        </label>
                        <textarea
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className={styles.textarea}
                            placeholder={t('Enter your comment')}
                            rows={4}
                        />
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        {t('Send')}
                    </button>
                </form>
            </div>
        </div>
    );
};