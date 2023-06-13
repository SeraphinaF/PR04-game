import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import bgDayImage from '../images/bgDay.png'
import bgNightImage from '../images/bgNight.png'
import birdImage from '../images/kangaroo.png'
import obstacleImage from '../images/tree.png'
import appleImage from '../images/apple.png'

const Resources = {
    BgDay: new ImageSource(bgDayImage),
    BgNight: new ImageSource(bgNightImage),
    Bird: new ImageSource(birdImage),
    Obstacle: new ImageSource(obstacleImage),
    Powerup: new ImageSource(appleImage)
}
const ResourceLoader = new Loader([Resources.BgDay, Resources.BgNight, Resources.Bird, Resources.Obstacle, Resources.Powerup])

export { Resources, ResourceLoader }