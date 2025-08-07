import ProfileCard from "./Components/ProfileCard.jsx"
import Squares from "./Background/Squares.jsx"

function App() {
  return (
    <>
      <div className="w-full h-screen bg-[rgb(10,10,10)] relative flex items-center justify-center">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal' 
          borderColor='#271e37'
          hoverFillColor='#222'
        />

        <div className="absolute">
            <ProfileCard
              name="Mark Alessandro"
              title="Web Developer"
              handle="markkwtf"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/src/Components/hi.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => window.open("https://discord.com/users/830764863328354324")}
              />
        </div>
      </div>
    </>
  )
}

export default App
 