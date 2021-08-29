import React from 'react'
import { ClipLoader } from 'react-spinners'

export default function Spinner() {
     const styles = {
         margin: '100px auto',
         display: 'block'
     }
    return (
        <ClipLoader size={100} css={styles} />
    )
}
