import { Card, CardContent } from './components/ui/card';
import { Music, Brain, Target, MessageSquare, Users, Quote, Award, Gamepad2, Book, Lightbulb } from 'lucide-react';
import TechBackground from './components/TechBackground';

function App() {
  return (
    <>
      <TechBackground />
      <div className="min-h-screen bg-black p-4 relative text-white"
           style={{
             backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 0, 0.1) 0%, transparent 50%)'
           }}>
        {/* Header Section */}
        <div className="text-center mb-8 animate-slide-in relative" style={{ animationDelay: '0.2s' }}>
        <div className="title-box">
          <h1 className="text-4xl font-bold text-[#00ff00] neon-text mb-2">
      User Guide to Eric J. Reyes Rivera
        </h1>
      </div>
  <p className="text-xl text-[#ff6b00] font-medium mt-4">
    Unlocking the best version of me
  </p>
</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Photo Section */}
            <Card className="neon-border bg-black/90 backdrop-blur-sm animate-slide-in hover:scale-105 transition-transform duration-300" 
                  style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6">
                <div className="aspect-square bg-black rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src="/Photo.jpg"
                    alt="Eric's Profile"
                    className="rounded-lg w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-[#00ff00] neon-text">Eric J. Reyes Rivera</h2>
                  <p className="text-[#ff6b00]">Creative CS & Gamer</p>
                </div>
              </CardContent>
            </Card>

            {/* Main Content Section */}
            <div className="md:col-span-2 space-y-6">
              {/* Motivation Section */}
              <Card className="neon-border bg-black/90 backdrop-blur-sm animate-slide-in" 
                    style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-[#00ff00] mr-2 animate-pulse" />
                    <h2 className="text-xl font-semibold text-[#00ff00] neon-text">What Motivates Me</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2 hover:transform hover:scale-105 transition-transform">
                      <Music className="w-5 h-5 text-[#ff6b00]" />
                      <span className="text-white">Create digital Art and Music</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:transform hover:scale-105 transition-transform">
                      <Gamepad2 className="w-5 h-5 text-[#ff6b00]" />
                      <span className="text-white">AI, Gaming and Innovation</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:transform hover:scale-105 transition-transform">
                      <Book className="w-5 h-5 text-[#ff6b00]" />
                      <span className="text-white">Continuous Learning</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Motto */}
              <Card className="cyber-gradient animate-slide-in transform hover:scale-105 transition-all duration-300" 
                    style={{ animationDelay: '0.5s' }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-6 h-6 text-black mr-2" />
                    <h2 className="text-xl font-semibold text-black">Personal Motto</h2>
                  </div>
                  <p className="text-2xl font-bold text-center text-black">
                    "Break the mold, build the future"
                  </p>
                </CardContent>
              </Card>

              {/* Grit Score */}
              <Card className="neon-border bg-black/90 backdrop-blur-sm animate-slide-in" 
                    style={{ animationDelay: '0.6s' }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-[#00ff00] mr-2 animate-pulse" />
                    <h2 className="text-xl font-semibold text-[#00ff00] neon-text">Grit Score</h2>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-full bg-[#00ff00]/20 neon-border flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#00ff00] neon-text">4.2/5</span>
                    </div>
                    <p className="text-white flex-1">
                      My high grit score reflects my persistence in tackling challenging projects 
                      and unwavering commitment to long-term goals in both gaming and development.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Sections */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Conflict Resolution */}
              <Card className="neon-border bg-black/90 backdrop-blur-sm animate-slide-in" 
                    style={{ animationDelay: '0.7s' }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="w-6 h-6 text-[#00ff00] mr-2 animate-pulse" />
                    <h2 className="text-xl font-semibold text-[#00ff00] neon-text">How I Handle Conflict</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 hover:transform hover:translate-x-2 transition-transform">
                      <div className="w-2 h-2 rounded-full bg-[#ff6b00] mt-2" />
                      <div>
                        <p className="font-semibold text-[#00ff00] neon-text">Collaborator</p>
                        <p className="text-white">I believe in open dialogue and finding win-win solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 hover:transform hover:translate-x-2 transition-transform">
                      <div className="w-2 h-2 rounded-full bg-[#ff6b00] mt-2" />
                      <div>
                        <p className="font-semibold text-[#00ff00] neon-text">Compromiser</p>
                        <p className="text-white">I prioritize quick resolutions to keep the team moving forward</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Team Contribution */}
              <Card className="neon-border bg-black/90 backdrop-blur-sm animate-slide-in" 
                    style={{ animationDelay: '0.8s' }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-[#00ff00] mr-2 animate-pulse" />
                    <h2 className="text-xl font-semibold text-[#00ff00] neon-text">Ways I Help Teams Succeed</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 hover:transform hover:translate-x-2 transition-transform">
                      <Lightbulb className="w-5 h-5 text-[#ff6b00]" />
                      <p className="text-white">
                        <span className="font-semibold text-[#00ff00] neon-text">Creative Thinker:</span> Bringing fresh perspectives to projects
                      </p>
                    </div>
                    <div className="flex items-center space-x-3 hover:transform hover:translate-x-2 transition-transform">
                      <Brain className="w-5 h-5 text-[#ff6b00]" />
                      <p className="text-white">
                        <span className="font-semibold text-[#00ff00] neon-text">Problem-Solver:</span> Finding efficient solutions to challenges
                      </p>
                    </div>
                    <div className="flex items-center space-x-3 hover:transform hover:translate-x-2 transition-transform">
                      <Users className="w-5 h-5 text-[#ff6b00]" />
                      <p className="text-white">
                        <span className="font-semibold text-[#00ff00] neon-text">Motivator:</span> Inspiring team focus and enthusiasm
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;