import { useState } from 'react';

export default function App() {
  const [showHug, setShowHug] = useState(false);
  const [showKiss, setShowKiss] = useState(false);

  const createHeartExplosion = (e) => {
    const container = e.currentTarget.parentElement;

    for (let i = 0; i < 15; i++) {
      const heart = document.createElement('div');
      heart.innerHTML = '💖';
      heart.className = 'heart-particle';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = `${Math.random() * 100}%`;

      container?.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 1500);
    }
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          overflow-x: hidden;
          background: #140018;
          font-family: sans-serif;
        }

        .heart-particle {
          position: absolute;
          font-size: 28px;
          animation: explode 1.5s ease-out forwards;
          pointer-events: none;
        }

        @keyframes explode {
          0% {
            transform: scale(0.5);
            opacity: 1;
          }

          100% {
            transform: translateY(-150px) scale(1.5);
            opacity: 0;
          }
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0px);
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          100% {
            transform: translateY(-120vh);
            opacity: 0;
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }

          to {
            width: 100%;
          }
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }

        .typewriter {
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #ff7ac6;
          width: 0;
          animation: typing 5s steps(40, end) forwards, blink 0.8s infinite;
        }
      `}</style>

      <div className="min-h-screen relative overflow-hidden text-white bg-gradient-to-br from-[#1a0024] via-[#32003d] to-[#140018]">

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-[-40px] text-pink-400"
              style={{
                left: `${Math.random() * 100}%`,
                animation: `floatUp ${5 + Math.random() * 5}s linear infinite`,
                animationDelay: `${i * 0.3}s`,
                fontSize: `${20 + Math.random() * 20}px`,
              }}
            >
              💖
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10 relative z-10 grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <div className="inline-block px-5 py-2 rounded-full bg-pink-500/20 border border-pink-300/30 mb-6">
              💖 You Are My Favorite Person 💖
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Every Moment With You
              <span className="block text-pink-400 mt-2">
                Feels Magical ✨
              </span>
            </h1>

            <p className="mt-6 text-pink-100 text-lg leading-relaxed max-w-xl">
              Shaima, your smile feels like home and your love makes every single day beautiful 💕
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <button className="px-8 py-4 rounded-3xl bg-pink-500 hover:scale-105 transition font-bold shadow-2xl">
                I Love You 💖
              </button>

              <button className="px-8 py-4 rounded-3xl bg-white text-pink-500 hover:scale-105 transition font-bold shadow-2xl">
                Forever Together ✨
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">

            <div className="absolute w-[400px] h-[400px] bg-pink-500/30 blur-[120px] rounded-full"></div>

            <div className="relative bg-white/10 backdrop-blur-xl border border-pink-300/20 rounded-[40px] p-8 shadow-[0_0_50px_rgba(255,105,180,0.25)] w-full max-w-xl overflow-visible">

              <h2 className="text-4xl font-black text-pink-400 text-center mb-5">
                To My Beautiful Shaima 💕
              </h2>

              <p className="text-pink-100 text-lg text-center leading-relaxed">
                You are the reason behind my happiest smiles and my warmest memories ❤️
              </p>

              <div className="mt-8 text-center text-3xl">
                ❤️ ✨ 💕 🌸
              </div>

              <div className="relative grid grid-cols-2 gap-4 mt-10">

                <button
                  onClick={createHeartExplosion}
                  className="col-span-2 py-4 rounded-3xl bg-gradient-to-r from-pink-500 to-rose-500 font-black text-white hover:scale-105 transition"
                >
                  Heart Explosion 💥
                </button>

                <div className="relative flex justify-center">

                  <button
                    onClick={() => setShowHug(!showHug)}
                    className="bg-pink-500 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition"
                  >
                    Hug Me 🤗
                  </button>

                  {showHug && (
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-pink-200/20 backdrop-blur-xl border border-pink-300/30 rounded-[30px] p-4 shadow-[0_0_50px_rgba(255,105,180,0.45)] z-50">
                      <img
                        src="https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif"
                        alt="hug"
                        className="w-[500px] max-w-[90vw] h-[300px] object-cover rounded-[24px]"
                      />
                    </div>
                  )}
                </div>

                <div className="relative flex justify-center">

                  <button
                    onClick={() => setShowKiss(!showKiss)}
                    className="bg-white text-pink-500 py-3 px-6 rounded-2xl font-bold hover:scale-105 transition"
                  >
                    Kiss Me 💋
                  </button>

                  {showKiss && (
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-pink-200/20 backdrop-blur-xl border border-pink-300/30 rounded-[30px] p-4 shadow-[0_0_50px_rgba(255,105,180,0.45)] z-50">
                      <img
                        src="https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif"
                        alt="kiss"
                        className="w-[500px] max-w-[90vw] h-[300px] object-cover rounded-[24px]"
                      />
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>

        <section className="max-w-5xl mx-auto px-4 pb-10 relative z-10">
          <div className="bg-white/10 backdrop-blur-xl rounded-[35px] p-8 border border-pink-300/20 text-center">

            <h2 className="text-4xl font-black text-pink-400 mb-8">
              Love Lyrics 🎶
            </h2>

            <div className="space-y-6 flex flex-col items-center text-pink-100 text-lg">

              <p className="typewriter italic">
                “Every heartbeat whispers your name...” 💖
              </p>

              <p className="typewriter italic" style={{ animationDelay: '4s' }}>
                “You make my world brighter...” ✨
              </p>

              <p className="typewriter italic" style={{ animationDelay: '8s' }}>
                “Forever doesn’t feel long enough with you...” 🌸
              </p>

            </div>
          </div>
        </section>

      </div>
    </>
  );
}
