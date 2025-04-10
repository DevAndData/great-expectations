import React from 'react';
import Profile from './components/Profile';
import SocialLinks from './components/SocialLinks';
import LinkList from './components/LinkList';
import './App.css'; // Import the CSS styles

// --- Data for your page ---
const profileData = {
  imageUrl: '[URL of the profile image]', // Replace with actual URL
  name: '@maninekkalapudi',
  description: 'Data Engineer || Cloud Enthusiast ☁️ Book Worm 🐛 Programmer 👨‍💻 Pythonista 🐍',
};

const socialLinksData = [
  { id: 1, platform: 'Twitter', url: '#', iconKey: 'twitter' }, // Replace '#' with actual URLs
  { id: 2, platform: 'LinkedIn', url: '#', iconKey: 'linkedin' },
  { id: 3, platform: 'YouTube', url: '#', iconKey: 'youtube' },
  { id: 4, platform: 'GitHub', url: '#', iconKey: 'github' },
  { id: 5, platform: 'X', url: '#', iconKey: 'x' }, // Or 'x-twitter' if using that specific brand icon
];

const mainLinksData = [
  { id: 1, text: 'Website', url: '[Link 1 URL]', iconKey: 'globe' }, // Replace URLs
  { id: 2, text: 'Data Engineering Guide', url: '[Link 2 URL]', iconKey: 'chart-bar' },
  { id: 3, text: 'Discord Server', url: '[Link 3 URL]', iconKey: 'discord' },
  { id: 4, text: '1:1 mentoring', url: '[Link 4 URL]', iconKey: 'users' },
  { id: 5, text: 'Peerlist', url: '[Link 5 URL]', iconKey: 'at' },
  { id: 6, text: 'WhatsApp Channel', url: '[Link 6 URL]', iconKey: 'whatsapp' },
  // Add more links as needed
];
// --- End Data ---


function App() {
  return (
    <div className="container">
      <Profile
        imageUrl={profileData.imageUrl}
        name={profileData.name}
        description={profileData.description}
      />
      <SocialLinks socials={socialLinksData} />
      <LinkList links={mainLinksData} />
    </div>
  );
}

export default App;