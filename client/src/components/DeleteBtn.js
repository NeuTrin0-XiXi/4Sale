import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'

export default function DeleteBtn() {
    return (
        <Button variant='transparent'  className='text-danger' >
            <FontAwesomeIcon size='lg' icon={faTrash} />
        </Button>

    )
}
