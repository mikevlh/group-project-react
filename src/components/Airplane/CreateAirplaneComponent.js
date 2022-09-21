import axios from "axios";
export default function HttpPost() {
  

  const onSubmit = async (e) => {
    e.preventDefault();

    const airplaneDto = {airplaneId: 0,
        manufacture: e.target.manufacture.value, 
        modelNumber: e.target.modelNumber.value,
        capacity : e.target.capacity.value
}
     
    try {
      const res = await axios.post(
          "http://localhost:8080/airplane/createairplane", airplaneDto);
           
      
      
    } catch (e) {
      alert(e);
    }
  };
  return (
      <div className="container mt-2">
        <form onSubmit={onSubmit}>

          <div class="form-group">
            <label for="manufacture">Manufacture</label>
            <input
                type="text"
                class="form-control"
                name="manufacture"
                placeholder="Enter the Manufacture"
            />
          </div>
          <div class="form-group">
            <label for="modelNumber">Model Number</label>
            <input
                type="text"
                class="form-control"
                name="modelNumber"
                placeholder="Enter the Model Number"
            />
            <label for="capacity">Capacity</label>
            <input type="number" class="form-control" name="capacity" placeholder="Enter the capacity"/>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
  );
}