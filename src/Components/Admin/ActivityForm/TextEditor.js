import React from 'react'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'
import './TextEditor.css'

<<<<<<< HEAD
const TextEditor = ({ placeholder, value, onChange, label="Descripción"}) => {
=======
const TextEditor = ({ placeholder, value, onChange, error = '' }) => {
>>>>>>> 2896bd3c745196b88dc4b279bf50ed386619e863
	const modules = {
		toolbar: [
			[{ header: '1' }, { header: '2' }],
			['bold', 'italic', 'underline'],
			[{ list: 'ordered' }, { list: 'bullet' }],
			['link', 'image'],
			['clean']
		],
		clipboard: {
			matchVisual: false
		}
	}

	const formats = [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'link',
		'image'
	]

	return (
		<div className='field'>
			<div className='field-label is-normal mb-2'>
				<label className='label has-text-left'>{label}</label>
			</div>
			<div className='field-body'>
				<div className='field'>
					<div className='control is-expanded'></div>
					<ReactQuill
						theme='snow'
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						modules={modules}
						formats={formats}
						className={`${error ? 'is-danger' : ''}`}
					/>
				</div>
			</div>
			<p className='help is-danger'>{error}</p>
		</div>
	)
}

export default TextEditor
