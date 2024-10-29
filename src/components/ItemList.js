import React from 'react'
import ItemCard from './ItemCard'

function ItemList({items, onDelete, onEdit}) {
  return (
    <div className='space-y-4'>
        {items.map((item) => (
            <ItemCard
                key={item.id}
                item={item}
                onDelete={onDelete}
                onEdit={onEdit}
            />
        ))}
    </div>
  )
}

export default ItemList