// sure delete element
import Swal from "sweetalert2";
import axiosInstance from "../Api/axios";
export const showPopupDlete = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
};
// ADd new proudact

// the proudact wich user ordered it and sure popup
export const AddedDone = () => {
  Swal.fire({
    title: "sucsssful",
    text: "The Order has been added!",
    icon: "success",
  });
};

// add productconst AddProduct: React.FC = () => {

export const AddProduct: React.FC = () => {
  const handleFormModelADD = async () => {
    const { value: inputValues } = await Swal.fire({
      title: "Add New Product",
      html: `
        <input placeholder="Enter Product Name" id="swal-input1" class="swal2-input max-w-md bg-white rounded-lg shadow-md p-6">
        <input type="number" placeholder="Enter the Quantity" id="swal-input2" class="swal2-input max-w-md bg-white rounded-lg shadow-md p-6">
        <input placeholder="Enter the Category" id="swal-input3" class="swal2-input max-w-md bg-white rounded-lg shadow-md p-6">
      `,
      showCancelButton: true,
      preConfirm: () => {
        return [
          (document.getElementById("swal-input1") as HTMLInputElement).value,
          (document.getElementById("swal-input2") as HTMLInputElement).value,
          (document.getElementById("swal-input3") as HTMLInputElement).value,
        ];
      },
    });

    if (inputValues) {
      const [name, quantity, description] = inputValues;

      if (!name || !quantity || !description) {
        Swal.fire({
          title: "Error",
          text: "Please fill out all fields.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      try {
        // Send POST request to add product
        const response = await axiosInstance.post("product/", {
          name,
          description,
          quantity,
        });

        Swal.fire({
          title: "Success",
          text: "Product added successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      } catch (error) {
        console.error("Error adding product:", error);

        Swal.fire({
          title: "Error",
          text: "There was an error adding the product. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };
  handleFormModelADD();
};
