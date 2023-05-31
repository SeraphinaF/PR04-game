import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import backgroundImage from '../images/background.png'
import birdImage from '../images/kangaroo.png'
import obstacleImage from '../images/tree.png'
import appleImage from '../images/apple.png'

const Resources = {
    Background: new ImageSource(backgroundImage),
    Bird: new ImageSource(birdImage),
    Obstacle: new ImageSource(obstacleImage),
    Powerup: new ImageSource(appleImage)
}
const ResourceLoader = new Loader([Resources.Background, Resources.Bird, Resources.Obstacle, Resources.Powerup])

export { Resources, ResourceLoader }