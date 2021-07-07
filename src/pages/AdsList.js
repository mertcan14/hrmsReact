import React, { useState, useEffect } from 'react'
import { Item, Button } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'

export default function AdsList() {

    const [advertisements, setAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getAdvertisement().then(result => setAdvertisements(result.data.data));
    })
    return (
        <div >
            <Item.Group relaxed>
            {
                advertisements.map(advertisement => (    
                    <div key= {advertisement.id}>
                        <Item>
                        <Button floated='right'>Başvur</Button>
                            <Item.Content verticalAlign='middle'>
                                <h3>{advertisement.jobTitle.name} İş İlanı</h3>
                                <small className='cinema'>{advertisement.applicationDeadline}</small>
                                <p className="text">{advertisement.description}</p>
                            </Item.Content>
                        </Item>  
                        <hr/>   
                    </div>
                ))
            }  
            </Item.Group>       
        </div>
    )
}
