import React from 'react'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (

        <form className='addForm ' value={newItem}
            onSubmit={handleSubmit}>

{/*                 
            <div className='flex ml-10'>
                <input

                    autoFocus
                    id='addItem'
                    type='text'
                    placeholder='Add Item'
                    required
                    className='mt-1 block w-5/6 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500'

                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button type='submit' className='p-2 bg-indigo-200 w-1/6 rounded-md shadow-lg hover:bg-green-200'>+</button>
            </div> */}


            <div class="flex">
                <input type="text"
                    className="flex-1 rounded-l-md px-4 py-2 border "
                    autoFocus
                    id='addItem'
                    placeholder='Add Item'
                    required
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button className="bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-green-200">+</button>
            </div>

        </form>
    )
}

export default AddItem