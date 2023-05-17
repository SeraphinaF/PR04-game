import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import backgroundImage from '../images/background.png'
import kangarooImage from '../images/kangaroo.png'

const Resources = {
    Background: new ImageSource(backgroundImage),
    Kangaroo: new ImageSource(kangarooImage)
}
const ResourceLoader = new Loader([Resources.Background, Resources.Kangaroo])

export { Resources, ResourceLoader }