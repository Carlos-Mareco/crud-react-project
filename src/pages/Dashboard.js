import React from 'react'
import { useState, useEffect } from 'react';
import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';

export default function Dashboard() {
    const [items, setItems] = useState([])
    const [editingItems, setEditingItems] = useState(null)

    useEffect(() => {
        setItems([
            { id: 1, title: "Item 1", description: "Descrição do item 1" },
            { id: 2, title: "Item 2", description: "Descrição do item 2" },
        ])
    })

    const handleCreate = (newItem) => {
        setItems([...items, {newItem, id: Date.now()}])
    }

    const handleUpdate = (updatedItem) => {
        setItems(items.map(item => 
            item.id == editingItems.id ? {...updatedItem, id: editingItems.id } : item
        ));
        setEditingItems(null);
    }

    const handleDelete = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const handleEdit = (item) => {
        setEditingItems(item)
    }


    return (
        <div className='p-8'>
            <h1 className='text-3xl font-bold mb-8'>CRUD</h1>
            <ItemForm onSubmit={editingItems ? handleUpdate : handleCreate}
                initialData = {editingItems}
            />
            <ItemList 
                items={items}
                onDelete={handleDelete}
                onEdit={handleDelete}
            />
        </div>
    )
}