import { Play, ChevronRight } from "lucide-react";

function HomePage() {
  const locations = [{ name: "Nacional" }, { name: "Villa del Rosario" }];

  const preventionVideos = [
    {
      id: 1,
      title: "Video 1",
      duration: "5:30",
      thumbnail:
        "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      title: "Video 2",
      duration: "7:15",
      thumbnail:
        "https://images.pexels.com/photos/5428835/pexels-photo-5428835.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      title: "Video 3",
      duration: "6:45",
      thumbnail:
        "https://images.pexels.com/photos/5428843/pexels-photo-5428843.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      title: "Video 4",
      duration: "8:20",
      thumbnail:
        "https://images.pexels.com/photos/5428834/pexels-photo-5428834.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-500 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Rutas de atención para jóvenes con adicciones
              </h1>
            </div>

            {/* Location Cards */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ubicaciones
              </h2>
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 hover:bg-white transition-all duration-300 cursor-pointer group shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-orange-600">
                        {location.name}
                      </h3>
                    </div>
                    <ChevronRight
                      className="text-orange-500 group-hover:text-orange-600 transition-colors"
                      size={24}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prevention Capsules */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white text-center lg:text-left">
              Cápsulas de prevención
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {preventionVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 cursor-pointer group border border-white/30"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="text-white ml-1" size={24} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-2">
                      {video.title}
                    </h3>
                    <p className="text-white/80 text-center text-sm">
                      Duración: {video.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
