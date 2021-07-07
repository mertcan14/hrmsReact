import React, { useState, useEffect } from 'react'
import {
    Button,
    Form,
  } from 'semantic-ui-react'
import JobTitleService from '../services/jobTitleService'

export default function Filter() {
    const [titles, serTitles] = useState([])

    useEffect(() => {
        let jobTitleService = new JobTitleService();
        jobTitleService.getTitle().then(result=>serTitles(result.data.data))
    })

    return (
        <div style={{backgroundColor:'#d7d9da', borderRadius:"5%", padding:"15%"}}>
            <Form size="large">
                <Form.Group grouped >
                <label>İş Türleri</label>
                {
                    titles.map(title=>(
                        <Form.Field key={title.id}  label={title.name} control='input' type='checkbox' />
                    ))
                }
                </Form.Group>
                <Form.Field control={Button}>Submit</Form.Field>
            </Form>
        </div>
    )
}
