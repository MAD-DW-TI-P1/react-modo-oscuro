export default function Instagram(props) {
    return (
        <div>
            <a href="#" className={props.theme === "dark" ? "aux-dark-mode": ""}>
                <svg height="38px" id="Layer_1" version="1.1" viewBox="0 0 127.999 128"  xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><linearGradient gradientTransform="matrix(1 0 0 -1 594 633)" gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="-566.7114" x2="-493.2875" y1="516.5693" y2="621.4296"><stop offset="0" style={{stopColor:'#FFB900'}}/><stop offset="1" style={{stopColor:'#9100EB'}}/></linearGradient><circle cx="64" cy="64" fill="url(#SVGID_1_)" r="64"/></g><g><g><path d="M82.333,104H45.667C33.72,104,24,94.281,24,82.333V45.667C24,33.719,33.72,24,45.667,24h36.666    C94.281,24,104,33.719,104,45.667v36.667C104,94.281,94.281,104,82.333,104z M45.667,30.667c-8.271,0-15,6.729-15,15v36.667    c0,8.271,6.729,15,15,15h36.666c8.271,0,15-6.729,15-15V45.667c0-8.271-6.729-15-15-15H45.667z" fill="#FFFFFF"/></g><g><path d="M64,84c-11.028,0-20-8.973-20-20c0-11.029,8.972-20,20-20s20,8.971,20,20C84,75.027,75.028,84,64,84z     M64,50.667c-7.352,0-13.333,5.981-13.333,13.333c0,7.353,5.981,13.333,13.333,13.333S77.333,71.353,77.333,64,C77.333,56.648,71.353,50.667,64,50.667z" fill="#FFFFFF"/></g><g><circle cx="85.25" cy="42.75" fill="#FFFFFF" r="4.583"/></g></g></svg>
            </a>
        </div>
    )
}