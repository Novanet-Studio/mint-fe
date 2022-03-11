import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return(
        <footer className="footer">
             <FontAwesomeIcon icon={["fab", "twitter"]} />
             <FontAwesomeIcon icon={["fab", "discord"]} />

        </footer>
    )
}

export default Footer