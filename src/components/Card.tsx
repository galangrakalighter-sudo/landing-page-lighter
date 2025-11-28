import ProfileCard from '@/components/ProfileCard'

const Card = () => {
    return (
        <>
            <ProfileCard name="Javi A. Torres" title="Software Engineer" handle="javicodes" status="Online" contactText="Contact Me" avatarUrl="/path/to/avatar.jpg" showUserInfo={true} enableTilt={true} enableMobileTilt={true} onContactClick={() => console.log('Contact clicked')}/>
        </>
    )
}

export default Card