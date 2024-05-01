'use client';

import React, { useState } from 'react';
import { TodoStore } from '../store/todoStore';
import { FaArrowRight } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MyTasksPage = () => {
    const [openTaskForm, setOpenTaskForm] = useState(false);

    const todo = TodoStore((state) => state.todo);
    const addToDo = TodoStore((state) => state.addToDo);

    const handleAddToDo = (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        addToDo(text);
        setOpenTaskForm(false);
    };

    return (
        <div className='grid grid-cols-3 gap-3'>

            {/* pending */}
            <div className='bg-[#2b2a33] px-2 py-5'>
                <h1 className='text-center pb-3 text-lg font-bold mb-4'>Pending</h1>
                <div>
                    {
                        todo.map((item, idx) =>
                            <div key={idx} className='mb-2 p-3 rounded-md bg-[#44424e] text-wrap' draggable='true' >
                                <p className='text-wrap overflow-hidden overflow-ellipsis'>{item}</p>
                                <div className='grid grid-cols-3 mt-4'>
                                    <button>
                                        <FaArrowRight className='mx-auto text-xl bg-black p-1 rounded-md' />
                                    </button>
                                    <button>
                                        <FaEdit className='mx-auto text-xl bg-black p-1 rounded-md' />
                                    </button>
                                    <button>
                                        <MdDelete className='mx-auto text-xl bg-black p-1 rounded-md' />
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
                {
                    openTaskForm ?
                        <form className='flex w-full mt-5' onSubmit={handleAddToDo}>
                            <input type="text" name='text' className='w-[80%] py-1 px-2 outline-none text-black' placeholder='Your Task...' required />
                            <input type="submit" className='px-3 py-1 bg-green-600 font-semibold cursor-pointer' value="Add" />
                        </form>
                        :
                        <button onClick={() => setOpenTaskForm(true)} className='mt-5'>+ Add Task</button>
                }
            </div>

        </div>
    );
};

export default MyTasksPage;