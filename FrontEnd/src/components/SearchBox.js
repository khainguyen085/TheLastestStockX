import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }
  return (
    <Form onSubmit={submitHandler} inline style={{backgroundColor:"white"}}>
      <i className="fas fa-search" style={{paddingLeft:"10px",marginLeft:"5px"}}></i><Form.Control
      style={{width:"400px",backgroundColor:"white"}}
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search...'
        className='mr-sm=2'
      ></Form.Control>
      {/* <Button type='submit' variant='outline-success' className='p-2' style={{backgroundColor:"white",border:"none"}}>
        Search
      </Button> */}
    </Form>
  )
}

export default SearchBox
