import axios from 'axios'

const BASE_URL = 'http://localhost:8079/api/employees'
const EMPLOYEES_URL = process.env.BASE_URL

export const getEmployees = async () => {   
    try{ 
    const response = await axios.get(`${BASE_URL}/employees`)
    return response.data
    }
    catch(error){
        console.log("Error getting employees: ", error)
        throw error;
    }   
}
export const getEmployeebyId = async (id) => {   
    try{ 
    const response = await axios.get(`${BASE_URL}/employees/${id}}`)
    return response.data
    }
    catch(error){
        console.log(`Error getting employees with ID ${id}: `, error)
        throw error;
    }   
}

export const addEmployee = async (employeeData) => {   
    try{ 
    const response = await axios.post(`${BASE_URL}/employees`, employeeData)
    return response.data
    }
    catch(error){
        console.log("Error adding employee: ", error)
        throw error;
    }   
}

export const updateEmployees = async (id, employeeData) => {   
    try{ 
    const response = await axios.put(`${BASE_URL}/employees/${id}`, employeeData)   
    return response.data
    }
    catch(error){
        console.log("Error updating employee: ", error)
        throw error;
    }   
}

export const deleteEmployee = async (id) => {   
    try{ 
    const response = await axios.delete(`${BASE_URL}/employees/${id}`)
    return response.data
    }
    catch(error){
        console.log("Error deleting employee: ", error)
        throw error;
    }   
}

