import { useState } from "react";

export default function App() {
  const [showHug, setShowHug] = useState(false);
  const [showKiss, setShowKiss] = useState(false);

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:sans-serif;
        }

        body{
          overflow-x:hidden;
          background:#18001f;
          color:white;
        }

        .page{
          min-height:100vh;
          padding:40px 20px;
          background:linear-gradient(135deg,#17001f,#32003d,#1d0026);
          position:relative;
          overflow:hidden;
        }

        .floating-heart{
          position:absolute;
          bottom:-50px;
          color:#ff4da6;
          animation:floatUp linear infinite;
          opacity:.7;
        }

        @keyframes floatUp{
          0%{
            transform:translateY(0);
            opacity:0;
          }

          10%{
            opacity:1;
          }

          100%{
            transform:translateY(-120vh);
            opacity:0;
          }
        }

        .container{
          max-width:1200px;
          margin:auto;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:50px;
          align-items:center;
          position:relative;
          z-index:2;
        }

        .title{
          font-size:70px;
          font-weight:900;
          line-height:1.1;
        }

        .pink{
          color:#ff4da6;
        }

        .desc{
          margin-top:20px;
          font-size:20px;
          color:#ffd9ef;
          line-height:1.6;
        }

        .buttons{
          margin-top:30px;
          display:flex;
          gap:15px;
          flex-wrap:wrap;
        }

        .btn{
          border:none;
          padding:15px 28px;
          border-radius:40px;
          cursor:pointer;
          font-size:18px;
          font-weight:bold;
          transition:.3s;
        }

        .btn:hover{
          transform:scale(1.05);
        }

        .pink-btn{
          background:#ff4da6;
          color:white;
        }

        .white-btn{
          background:white;
          color:#ff4da6;
        }

        .card{
          background:rgba(255,255,255,.08);
          border:1px solid rgba(255,255,255,.1);
          border-radius:35px;
          padding:40px;
          backdrop-filter:blur(20px);
          text-align:center;
          position:relative;
        }

        .card h2{
          font-size:40px;
          color:#ff4da6;
          margin-bottom:20px;
        }

        .card p{
          color:#ffe3f4;
          font-size:18px;
          line-height:1.7;
        }

        .emoji{
          font-size:40px;
          margin-top:20px;
        }

        .action-buttons{
          margin-top:30px;
          display:flex;
          gap:15px;
          justify-content:center;
          flex-wrap:wrap;
        }

        .popup{
          position:absolute;
          left:50%;
          transform:translateX(-50%);
          bottom:90px;
          background:rgba(255,255,255,.1);
          padding:15px;
          border-radius:30px;
          backdrop-filter:blur(20px);
          border:1px solid rgba(255,255,255,.2);
          z-index:50;
        }

        .popup img{
          width:500px;
          max-width:90vw;
          height:300px;
          object-fit:cover;
          border-radius:25px;
        }

        .lyrics{
          max-width:900px;
          margin:70px auto 0;
          background:rgba(255,255,255,.08);
          border-radius:35px;
          padding:40px;
          text-align:center;
          backdrop-filter:blur(20px);
        }

        .lyrics h2{
          color:#ff4da6;
          font-size:40px;
          margin-bottom:30px;
        }

        .line{
          margin:25px 0;
          font-size:22px;
          color:#ffe3f4;
          overflow:hidden;
          white-space:nowrap;
          border-right:3px solid #ff4da6;
          width:0;
          animation:typing 5s steps(40,end) forwards, blink .7s infinite;
        }

        .line2{
          animation-delay:4s;
        }

        .line3{
          animation-delay:8s;
        }

        @keyframes typing{
          from{
            width:0;
          }

          to{
            width:100%;
          }
        }

        @keyframes blink{
          50%{
            border-color:transparent;
          }
        }

        .slideshow{
          max-width:1100px;
          margin:60px auto 0;
          overflow-x:auto;
          display:flex;
          gap:20px;
          padding-bottom:20px;
        }

        .slide{
          min-width:230px;
          height:320px;
          border-radius:35px;
          background:linear-gradient(135deg,#ff9ad5,#ffc6e8,#dca6ff);
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          color:#8a0057;
          padding:20px;
          text-align:center;
        }

        .slide-heart{
          font-size:70px;
        }

        @media(max-width:900px){
          .container{
            grid-template-columns:1fr;
          }

          .title{
            font-size:50px;
          }
        }
      `}</style>

      <div className="page">

        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${i * 0.3}s`,
              fontSize: `${20 + Math.random() * 25}px`,
            }}
          >
            💖
          </div>
        ))}

        <div className="container">

          <div>
            <h1 className="title">
              Every Moment With You
              <span className="pink"> Feels Magical ✨</span>
            </h1>

            <p className="desc">
              Shaima, your smile feels like home and your love makes every day beautiful 💕
            </p>

            <div className="buttons">
              <button className="btn pink-btn">I Love You 💖</button>
              <button className="btn white-btn">Forever Together ✨</button>
            </div>
          </div>

          <div className="card">

            <h2>To My Beautiful Shaima 💕</h2>

            <p>
              You are the reason behind my happiest smiles and warmest memories ❤️
            </p>

            <div className="emoji">
              ❤️ ✨ 💕 🌸
            </div>

            <div className="action-buttons">

              <div style={{position:"relative"}}>

                <button
                  className="btn pink-btn"
                  onClick={() => setShowHug(!showHug)}
                >
                  Hug Me 🤗
                </button>

                {showHug && (
                  <div className="popup">
                    <img
                      src="https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif"
                      alt="hug"
                    />
                  </div>
                )}
              </div>

              <div style={{position:"relative"}}>

                <button
                  className="btn white-btn"
                  onClick={() => setShowKiss(!showKiss)}
                >
                  Kiss Me 💋
                </button>

                {showKiss && (
                  <div className="popup">
                    <img
                      src="https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif"
                      alt="kiss"
                    />
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

        <div className="lyrics">

          <h2>Love Lyrics 🎶</h2>

          <div className="line">
            “Every heartbeat whispers your name...” 💖
          </div>

          <div className="line line2">
            “You make my whole world brighter...” ✨
          </div>

          <div className="line line3">
            “Forever doesn’t feel long enough with you...” 🌸
          </div>

        </div>

        <div className="slideshow">

          {[1,2,3,4,5].map((item) => (
            <div className="slide" key={item}>

              <div className="slide-heart">
                💖
              </div>

              <h2>Shaima</h2>

              <p>
                Your beautiful photos will appear here ✨
              </p>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}
