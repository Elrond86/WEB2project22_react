export default function Backdrop(props) {
    
    return <div className='backdrop' onClick={props.onClick} />;   //hier nutzen wir das onClick, was in props schon gespeichert wurde im UserSessionWidged
}



{/*Backdrop ist ein grauer Hintergrund (siehe index.css) hinter dem Modal,
 der  Interaktionen mit dem Rest der Seite blockt, während Modal offen ist
*/}