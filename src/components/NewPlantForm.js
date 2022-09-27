import React from "react";

function NewPlantForm({ handleChange, handleSubmit, newPlant }) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={newPlant.name}
          placeholder="Plant name"
        />
        <input
          onChange={handleChange}
          type="text"
          name="image"
          value={newPlant.image}
          placeholder="Image URL"
        />
        <input
          onChange={handleChange}
          type="number"
          name="price"
          step="0.01"
          value={newPlant.price}
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
