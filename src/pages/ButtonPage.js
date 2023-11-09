import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'
import Button from '../components/Button'


function ButtonPage() {

    const handlClick = () => {
        console.log('Clicked')
    }
    
  return (

    <div>
        <div>
            <Button primary rounded onClick={handlClick}>
                <GoBell/>
                Click Me!
            </Button>
        </div>
        <div>
            <Button secondary>
                <GoCloudDownload/>
                NO Click me!
            </Button>
        </div>
        <div>
            <Button warning>
                <GoDatabase/>
                NAHH Me Bro
            </Button>
        </div>
        <div>
            <Button danger>no no no ME!!</Button>
        </div>
        <div>
            <Button primary outline rounded>psst me</Button>
        </div>
        <div>
            <Button secondary outline>CLICK MEEEE NOW!!!!</Button>
        </div>
    </div>
  )
}

export default ButtonPage