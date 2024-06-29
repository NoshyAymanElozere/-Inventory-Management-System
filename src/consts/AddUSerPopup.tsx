import Swal from "sweetalert2";
// Add new users
export const AddUser = async () => {
  const { value: inputValue } = await Swal.fire({
    title: "Add New User",

    html: `
    <input  placeholder="Enter user ID" id="swal-input1" class="swal2-input  max-w-md bg-white rounded-lg shadow-md " >
    <input type="password" placeholder="Enter the password"  id="swal-input2" class="swal2-input  max-w-md bg-white rounded-lg shadow-md ">
    <div >  
      <select  id="swal-input4" class="swal2-input  max-w-md bg-white rounded-lg shadow-md  " style="width: 57%;"><option value="Admin">Admin</option><option value="User">User</option></select>
    </div>
    <input type="number" placeholder="Enter phone number"  id="swal-input3" class="swal2-input  max-w-md bg-white rounded-lg shadow-md ">
    <input type="password" placeholder="Enter the password"  id="swal-input5" class="swal2-input  max-w-md bg-white rounded-lg shadow-md ">
    <input type="password" placeholder="Enter the Location"  id="swal-input5" class="swal2-input  max-w-md bg-white rounded-lg shadow-md ">
    
  `,
    showCancelButton: true,
  });
};
