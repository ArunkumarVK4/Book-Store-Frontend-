import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function BookDetails() {
  const [inputs, setInputs] = useState({})
  const [checked, setChecked] = useState(false)

  const history = useNavigate()

  const id = useParams().id;
  // console.log(id)

  useEffect(()=>{
      const fetchData = async()=>{ 
        await axios.get(`https://d-o5ba.onrender.com/books/${id}`).then((res)=>setInputs(res.data.book))
      } 
      fetchData()
  }, [id])


  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e)=>{
    e.preventDefault()
    // console.log(inputs)
    await axios.put(`https://d-o5ba.onrender.com/books/update/${id}`,inputs).then(()=> history("/books"))

  }

  return (
    <form onSubmit={handleSubmit}>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
      maxWidth={700}
      alignContent={"center"}
      alignSelf="center"
      marginLeft={"auto"}
      marginRight="auto"
      marginTop={10}
    >
      <FormLabel>Name</FormLabel>
      <TextField
        value={inputs.name}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="name"
      />
      <FormLabel>Author</FormLabel>
      <TextField
        value={inputs.author}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="author"
      />
      <FormLabel>Description</FormLabel>
      <TextField
        value={inputs.description}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="description"
      />
      <FormLabel>Price</FormLabel>
      <TextField
        value={inputs.price}
        onChange={handleChange}
        type="number"
        margin="normal"
        fullWidth
        variant="outlined"
        name="price"
      />
      <FormLabel>Image</FormLabel>
      <TextField
        value={inputs.image}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="image"
      />
      <FormControlLabel
        control={
          <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
        }
        label="Available"
      />

      <Button variant="contained" type="submit">
        Update Book
      </Button>
    </Box>
  </form>
  )
}

export default BookDetails