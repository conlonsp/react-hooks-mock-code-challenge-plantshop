import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')
  const [newPlant, setNewPlant] = useState({
    name: '',
    image: '',
    price: 0,
  })

  useEffect(() => {
    console.log('useEffect has been hit')
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(data => setPlants(data))
  }, [])

  function handleChange(event) {
    setNewPlant({
      ...newPlant,
      [event.target.name]: event.target.value
    })
  }

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  let filterPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  function handleSubmit(event) {
    event.preventDefault()
    const addPlant = {
      name: newPlant.name,
      image: newPlant.image,
      price: parseInt(newPlant.price)
    }
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addPlant)
    })
    .then(r => r.json())
    .then(data => setPlants([...plants, data]))
    setNewPlant({
      name: '',
      image: '',
      price: 0,
    })
  }

  return (
    <main>
      <NewPlantForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newPlant={newPlant}
      />
      <Search handleSearch={handleSearch} />
      <PlantList plants={filterPlants} />
    </main>
  );
}

export default PlantPage;
