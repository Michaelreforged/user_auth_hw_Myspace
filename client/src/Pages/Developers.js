import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Developers = () => (
  
  <>
  
  <h1 style={styles.title}>DevPointers Team</h1>
  
    <Card.Group centered>
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Michael</Card.Header>
          <Card.Meta>
            <span className='date'>Developer</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
          <Icon name='mail' />
          michael@gmail.com
        </a>
      </Card.Content>
      </Card>
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/molly.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Sydney</Card.Header>
          <Card.Meta>
            <span className='date'>Developer</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
          <Icon name='mail' />
          sydney@gmail.com
        </a>
      </Card.Content>
      </Card>
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/molly.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Julie</Card.Header>
          <Card.Meta>
            <span className='date'>Developer</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
          <Icon name='mail' />
          julie@gmail.com
        </a>
      </Card.Content>
      </Card>
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Rafael</Card.Header>
          <Card.Meta>
            <span className='date'>Developer</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
          <Icon name='mail' />
          rbrionesdev@outlook.com
        </a>
      </Card.Content>
      </Card>
    </Card.Group>
  </>
)

const styles = {
  title: {
    textAlign: 'center',
  }
}

export default Developers;