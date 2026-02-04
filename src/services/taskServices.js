import task from '../models/task.js';

export const getAlltasks = async()=> await task.find();

export const createTask = async(taskdata)=> {
         return await task.create(taskdata)
};
export const updateTask = async(id,updatedata)=> {
       return await task.findByIdAndUpdate(id,updatedata,{new:true});
};
export const deleteTask = async(id)=> {
       return await task.findByIdAndDelete(id);
};

