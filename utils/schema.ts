import * as Yup from 'yup';

export const contactFormSchema = Yup.object().shape({
	senderEmail: Yup.string()
		.email('Email inválido.')
		.required('Por favor, preencha este campo.'),
	message: Yup.string()
		.max(600, 'Seu texto não pode exceder 600 caracteres.')
		.required('Por favor, preencha este campo.'),
});
