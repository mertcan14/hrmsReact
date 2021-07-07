import React from 'react'
import Filter from '../pages/JobTitle'
import AdsList from '../pages/AdsList'
import { Grid } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div >
            <Grid>
                <Grid.Row>
                <Grid.Column width={4}>
                    <Filter/>
                </Grid.Column>
                <Grid.Column width={12}>
                    <AdsList/>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
