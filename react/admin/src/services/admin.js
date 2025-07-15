import axios from 'axios'
import { createUrl } from '../utils'


export async function Registration(firstName, lastName, email, password) {
  

  try{


    const body={

      firstName,
      lastName,
      email,
      password
    }

    const url=createUrl("Admin/reg")
    const response=await axios.post(url,body)

 

    return response.data
   
  }catch(ex){

    return {staus:'erorr',erorr:ex}

  }
}


export async function login(email, password) {
  try {
    const body = { email, password }
    const url = createUrl('Admin/login')
    const response = await axios.post(url, body)
    return response.data
  } catch (ex) {
    return { status: 'error', error: ex }
  }
}



export async function allbus() {
try {
  
  const url = createUrl('Bus/all')
  const response = await axios.get(url)
  return response.data
} catch (ex) {
  return { status: 'error', error: ex }
}
}


export async function addbus1(busName,driverName,busType,seats) {
  try {
    const body = {
      busName,
      driverName, 
      busType,
      seats
  };
    const url = createUrl('Bus/add')
    const response = await axios.post(url,body)
    return response.data
  } catch (ex) {
    return { status: 'error', error: ex }
  }
  }




  // export async function addbus1(busName,driverName,busType,seats) {
  //   try {
  //     const body = {
  //       busName,
  //       driverName, 
  //       busType,
  //       seats
  //   };
  //     const url = createUrl('Bus/add')
  //     const response = await axios.post(url,body)
  //     return response.data
  //   } catch (ex) {
  //     return { status: 'error', error: ex }
  //   }
  //   }




    // export async function deleteBus(id) {
    //   try {
        
    //     // const body = {
    //     //        id
    //     //     };


    //     const url = createUrl('Bus/delete')
    //     const response = await axios.delete(url,id)
    //     return response.data
    //   } catch (ex) {
    //     return { status: 'error', error: ex }
    //   }
    //   }


    export async function deleteBus(id) {
      try {
          const url = createUrl(`Bus/delete?id=${id}`); 
          console.log(url)
          // Pass the id as a query parameter
          const response = await axios.delete(url);  // Send DELETE request
          return response.data;
      } catch (ex) {
          return { status: 'error', error: ex };
      }
  }
  

  export async function allbooking() {
    try {
      
      const url = createUrl('Bus/booking')
      const response = await axios.get(url)
      return response.data
    } catch (ex) {
      return { status: 'error', error: ex }
    }
    }