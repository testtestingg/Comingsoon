import { Warp } from "@paper-design/shaders-react"
 
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background shader */}
      <div className="absolute inset-0">
        <Warp
          style={{ height: "100%", width: "100%" }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={1}
          colors={["hsl(240, 100%, 20%)", "hsl(220, 100%, 75%)", "hsl(210, 90%, 30%)", "hsl(200, 100%, 80%)"]}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-2xl w-full text-center space-y-8">
          <h1 className="text-white text-6xl md:text-7xl font-sans font-light italic">Under Construction</h1>
        </div>
      </div>
    </main>
  )
}
