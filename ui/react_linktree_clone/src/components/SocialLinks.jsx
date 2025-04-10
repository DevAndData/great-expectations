import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons you need (adjust based on your actual links)
import { faTwitter, faLinkedin, faYoutube, faGithub, faDiscord, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faX /* Assuming this is the intended X icon */ } from '@fortawesome/free-solid-svg-icons'; // Or faXTwitter from free-brands if available


// Map icon names to imported icons
const iconMap = {
    twitter: faTwitter,
    linkedin: faLinkedin,
    youtube: faYoutube,
    github: faGithub,
    x: faX, // Or faXTwitter
    discord: faDiscord,
    whatsapp: faWhatsapp,
    // Add more mappings if needed
};

function SocialLinks({ socials }) {
    return (
        <div className="socials">
            {socials.map((social) => (
                <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.platform}>
                    <FontAwesomeIcon icon={iconMap[social.iconKey]} />
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;