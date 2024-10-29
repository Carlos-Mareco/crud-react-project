import React from 'react'
import { useState, useEffect } from 'react'

export default function ItemForm({onSubmit, initialData = null}) {
    const [formData, setFormData] = useState({title: "", description: ""})

    useEffect(() => {
        if(initialData) {
            setFormData(initialData)
        }
    }, [initialData]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData)
    }
    
    return (
        <form onSubmit = {handleSubmit} className='space-y-4 mb-8'>
            <div>
                <label className='block text-sm font-medium text-gray-700'>Titulo</label>
                <input
                type='text'
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required ></input>
            </div>
            <div>
                <label className='block text-sm font-medium text-gray-700'>Descrição</label>
                <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus: ring-blue-500'
                    required
                >
                </textarea>
            </div>
            <buttom
                type='submit'
                className='bg-blue-600 text-white px-4 py-4 rounded hover:bg-blue-800'    
            >
                {initialData ? 'Atualizar' : 'Criar'}
            </buttom>
        </form>
    )
}