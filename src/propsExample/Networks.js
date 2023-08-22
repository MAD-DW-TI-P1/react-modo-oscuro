import Instagram from './Instagram'
import Linkedin from './Linkedin'

export default function Networks(props) {
    return (
        <>
            <Instagram theme={props.theme}/>
            <Linkedin theme={props.theme}/>
        </>
    )
}