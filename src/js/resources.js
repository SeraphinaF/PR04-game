import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import backgroundImage from '../images/background.png'
import birdImage from '../images/kangaroo.png'

const Resources = {
    Background: new ImageSource(backgroundImage),
    Bird: new ImageSource(birdImage)
}
const ResourceLoader = new Loader([Resources.Background, Resources.bird])

export { Resources, ResourceLoader }