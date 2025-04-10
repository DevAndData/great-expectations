import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import icon types you'll use in buttons
import { faGlobe, faChartBar, faUsers, faAt } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Map icon names to imported icons (similar to SocialLinks)
const iconMap = {
    globe: faGlobe,
    'chart-bar': faChartBar,
    discord: faDiscord,
    users: faUsers,
    at: faAt,
    whatsapp: faWhatsapp,
    // Add other icons used in your links
};

function LinkButton({ text, url, iconKey }) {
    const icon = iconMap[iconKey]; // Get the icon object

    return (
        <a href={url} className="link-button" target="_blank" rel="noopener noreferrer">
            {icon && <FontAwesomeIcon icon={icon} />} {/* Render icon if found */}
            {text}
        </a>
    );
}

export default LinkButton;