import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './TheParallax.css'
import Experiences from './Experiences'

// import Header from './Header'
// import ModalMe from './ModalMe'
function TheParallax () {
  return(
    <>
      <Parallax pages={2} style={{ top: '0', left: '0' }} className='animation text-gray-200'>
        {/* backgrounds */}
        <ParallaxLayer offset={0} speed={.2}>
          <div className='animationLayer parallax' id='background1'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={.2}>
          {/* <div className='animationLayer parallax' id='background2'></div> */}
          <div id="background2" className='animationLayer parallax'></div>
        </ParallaxLayer>
        {/* Hi I'm Aaron */}
        <ParallaxLayer offset={0} speed={-.17}>
          <h1 className='animationLayer parallax absolute top-1/3 left-1/2 -translate-x-1/2 text-6xl max-lg:text-4xl max-md:text-2xl max-sm:text-lg text-gray-200 font-bold'>
            Hello,
          <br />
          I'm Aaron
          </h1>
        </ParallaxLayer>
        {/* Clouds */}
        <ParallaxLayer offset={0} speed={.12} >
          <div className="animationLayer parallax absolute flex top-20 left-10 bg-[#50435d] w-48 h-24 rounded-full shadow-lg">  
          </div>
          <div className="animationLayer parallax absolute top-16 right-1/3 w-48 h-24 bg-[#50435d] rounded-full shadow-lg">  
          </div>
          <div className="animationLayer parallax absolute top-12 right-10 w-48 h-24 bg-[#50435d] rounded-full shadow-lg">  
          </div>
        </ParallaxLayer>
        {/* Buildings */}
        <ParallaxLayer offset={0} speed={.15}>
          <svg fill="black" version="1.1" id="foreground1"
          width="300px" height="300px" viewBox="0 0 60.207 60.206"
          xml:space="preserve">
            <g transform="translate(0, 6)">
              <path d="M51.751,23.435V5.474h-7.106v25.975h-4.083V19.958H30.103v-7.862h-9.197v18.442h-2.282v-5.742H7.902v-7.862H0v7.862v5.742
                v24.195h16.371h2.253h2.282h7.561h1.636h5.268h5.191h19.645V38.826v-7.377v-8.015H51.751z M4.843,26.899H2.239v-6.183h2.604V26.899
                z M11.093,38.92H8.489V28.439h2.604V38.92z M15.39,34.623h-2.604v-6.184h2.604V34.623z M25.155,29.991h-2.604v-6.183h2.604V29.991z
                M25.155,21.104h-2.604V14.92h2.604V21.104z M29.583,38.632h-2.604V32.45h2.604V38.632z M34.4,29.991h-2.604v-6.183H34.4V29.991z
                M49.113,35.54h-2.604v-6.184h2.604V35.54z M49.113,24.195h-2.604v-6.183h2.604V24.195z M49.113,13.885h-2.604V7.703h2.604V13.885z
                M54.582,40.779h-2.604V30.3h2.604V40.779z"/>
            </g>
          </svg>
          <svg fill="#000000" version="1.1" id="foreground2" 
          width="300px" height="300px" viewBox="0 0 58.333 58.333"
          xml:space="preserve" >
            <g transform="translate(0, 6)">
            <path d="M54.687,50.825V12.891L39.062,3.516v47.31h-2.864V29.112c0-2.302-1.865-4.167-4.167-4.167h-9.896v23.622h-1.042V16.642
            c-0.707-1.298-2.064-2.188-3.646-2.188H8.333c-2.301,0-4.167,1.866-4.167,4.167v32.206H0v3.992h58.333v-3.992H54.687z
            M47.917,14.019h4.688v4.688h-4.688V14.019z M47.917,22.266h4.688v4.688h-4.688V22.266z M47.917,30.686h4.688v4.688h-4.688V30.686z
            M47.917,38.933h4.688v4.688h-4.688V38.933z M41.146,14.019h4.688v4.688h-4.688V14.019z M41.146,22.266h4.688v4.688h-4.688V22.266z
            M41.146,30.686h4.688v4.688h-4.688V30.686z M41.146,38.933h4.688v4.688h-4.688V38.933z M13.888,19.129h4.167v4.167h-4.167V19.129z
            M13.888,26.595h4.167v4.167h-4.167V26.595z M13.888,34.158h4.167v4.167h-4.167V34.158z M13.888,41.623h4.167v4.167h-4.167V41.623z
            M6.944,19.129h4.167v4.167H6.944V19.129z M6.944,26.595h4.167v4.167H6.944V26.595z M6.944,34.158h4.167v4.167H6.944V34.158z
            M6.944,41.623h4.167v4.167H6.944V41.623z"/>
            </g>
          </svg>  
          <svg fill="#000000" version="1.1" id="foreground3"
          width="300px" height="300px" viewBox="0 0 56.571 56.571"
          xml:space="preserve">
            <g transform="translate(0, 6)">
            <path d="M53.009,44.503V22.875c0-1.724-1.378-3.356-3.079-3.646l-1.18-0.201c-1.701-0.29-4.451-0.269-6.148,0.047l-0.573,0.106
            c-1.695,0.315-3.07,1.969-3.07,3.693v21.627h-1.373V11.749c0-2.555-2.042-4.972-4.56-5.4l-1.75-0.298
            c-2.518-0.429-6.594-0.397-9.105,0.07l-0.85,0.157c-2.51,0.468-4.545,2.916-4.545,5.47v32.755h-1.409V26.925
            c0-1.449-1.158-2.82-2.585-3.062l-0.992-0.169c-1.429-0.243-3.74-0.225-5.163,0.04l-0.484,0.09
            c-1.424,0.264-2.578,1.654-2.578,3.102v17.578H0v6.32h56.571v-6.32H53.009z M50.356,21.836c0.544,0.495,0.909,1.193,0.956,1.925
            h-0.956V21.836z M50.356,25.634h0.964v2.914h-0.964V25.634z M50.356,30.422h0.964v2.913h-0.964V30.422z M50.356,35.209h0.964v2.913
            h-0.964V35.209z M50.356,39.996h0.964v2.205h-0.964V39.996z M47.909,20.966c0.061,0.009,0.117,0.017,0.176,0.027l0.896,0.153
            c0.262,0.045,0.515,0.133,0.75,0.255v2.36h-1.822V20.966z M47.909,25.634h1.822v2.914h-1.822V25.634z M47.909,30.422h1.822v2.913
            h-1.822V30.422z M47.909,35.209h1.822v2.913h-1.822V35.209z M47.909,39.996h1.822v2.205h-1.822V39.996z M44.684,20.879
            c0.849-0.059,1.794-0.054,2.6,0.015v2.866h-2.6V20.879z M44.684,25.634h2.6v2.914h-2.6V25.634z M44.684,30.422h2.6v2.913h-2.6
            V30.422z M44.684,35.209h2.6v2.913h-2.6V35.209z M44.684,39.996h2.6v2.205h-2.6V39.996z M42.29,21.344
            c0.217-0.109,0.45-0.19,0.689-0.235l0.438-0.081c0.196-0.037,0.414-0.068,0.642-0.094v2.825H42.29V21.344z M42.29,25.634h1.769
            v2.914H42.29V25.634z M42.29,30.422h1.769v2.913H42.29V30.422z M42.29,35.209h1.769v2.913H42.29V35.209z M42.29,39.996h1.769v2.205
            H42.29V39.996z M41.665,21.768v1.993h-1.008C40.704,23.002,41.09,22.275,41.665,21.768z M40.647,25.634h1.018v2.914h-1.018V25.634z
            M40.647,30.422h1.018v2.913h-1.018V30.422z M40.647,35.209h1.018v2.913h-1.018V35.209z M40.647,39.996h1.018v2.205h-1.018V39.996z
            M33.655,10.208c0.806,0.735,1.347,1.767,1.414,2.852h-1.414V10.208z M33.655,15.833h1.426v4.316h-1.426V15.833z M33.655,22.924
            h1.426v4.316h-1.426V22.924z M33.655,30.014h1.426v4.317h-1.426V30.014z M33.655,37.104h1.426v3.267h-1.426V37.104z M30.03,8.92
            c0.088,0.014,0.177,0.025,0.26,0.04l1.328,0.227c0.389,0.066,0.763,0.197,1.11,0.377v3.496h-2.699L30.03,8.92L30.03,8.92z
            M30.03,15.833h2.699v4.316H30.03V15.833z M30.03,22.924h2.699v4.316H30.03V22.924z M30.03,30.014h2.699v4.317H30.03V30.014z
            M30.03,37.104h2.699v3.267H30.03V37.104z M25.251,8.791c1.26-0.086,2.658-0.08,3.855,0.023v4.246h-3.855V8.791z M25.251,15.833
            h3.855v4.316h-3.855V15.833z M25.251,22.924h3.855v4.316h-3.855V22.924z M25.251,30.014h3.855v4.317h-3.855V30.014z M25.251,37.104
            h3.855v3.267h-3.855V37.104z M21.706,9.479c0.325-0.161,0.668-0.281,1.022-0.347l0.646-0.121c0.292-0.054,0.614-0.1,0.952-0.138
            v4.185h-2.622L21.706,9.479L21.706,9.479z M21.706,15.833h2.622v4.316h-2.622V15.833z M21.706,22.924h2.622v4.316h-2.622V22.924z
            M21.706,30.014h2.622v4.317h-2.622V30.014z M21.706,37.104h2.622v3.267h-2.622V37.104z M20.782,10.107v2.951h-1.495
            C19.357,11.936,19.931,10.859,20.782,10.107z M19.277,15.833h1.505v4.316h-1.505V15.833z M19.277,22.924h1.505v4.316h-1.505V22.924
            z M19.277,30.014h1.505v4.317h-1.505V30.014z M19.277,37.104h1.505v3.267h-1.505V37.104z M13.137,26.051
            c0.457,0.417,0.763,1.002,0.803,1.618h-0.803V26.051z M13.137,29.243h0.808v2.448h-0.808V29.243z M13.137,33.264h0.808v2.448
            h-0.808V33.264z M13.137,37.286h0.808v2.447h-0.808V37.286z M13.137,41.309h0.808v1.851h-0.808V41.309z M11.081,25.321
            c0.051,0.008,0.1,0.015,0.147,0.022l0.754,0.128c0.221,0.039,0.432,0.112,0.629,0.214v1.982h-1.53V25.321z M11.081,29.243h1.53
            v2.448h-1.53V29.243z M11.081,33.264h1.53v2.448h-1.53V33.264z M11.081,37.286h1.53v2.447h-1.53V37.286z M11.081,41.309h1.53v1.851
            h-1.53V41.309z M8.371,25.248c0.715-0.049,1.507-0.045,2.187,0.014v2.407H8.371V25.248z M8.371,29.243h2.187v2.448H8.371V29.243z
            M8.371,33.264h2.187v2.448H8.371V33.264z M8.371,37.286h2.187v2.447H8.371V37.286z M8.371,41.309h2.187v1.851H8.371V41.309z
            M6.36,25.639c0.183-0.091,0.377-0.159,0.579-0.197l0.368-0.067c0.166-0.031,0.347-0.058,0.539-0.08v2.373H6.36V25.639z
            M6.36,29.243h1.485v2.448H6.36V29.243z M6.36,33.264h1.485v2.448H6.36V33.264z M6.36,37.286h1.485v2.447H6.36V37.286z
            M6.36,41.309h1.485v1.851H6.36V41.309z M5.835,25.995v1.674H4.988C5.027,27.032,5.353,26.421,5.835,25.995z M4.982,29.243h0.853
            v2.448H4.982V29.243z M4.982,33.264h0.853v2.448H4.982V33.264z M4.982,37.286h0.853v2.447H4.982V37.286z M4.982,41.309h0.853v1.851
            H4.982V41.309z"/>
            </g>
          </svg> 
          <svg fill="black" version="1.1" id="foreground4"
          width="300px" height="300px" viewBox="0 0 60.207 60.206"
          >
            <g transform="translate(0, 6)">
              <path d="M51.751,23.435V5.474h-7.106v25.975h-4.083V19.958H30.103v-7.862h-9.197v18.442h-2.282v-5.742H7.902v-7.862H0v7.862v5.742
                v24.195h16.371h2.253h2.282h7.561h1.636h5.268h5.191h19.645V38.826v-7.377v-8.015H51.751z M4.843,26.899H2.239v-6.183h2.604V26.899
                z M11.093,38.92H8.489V28.439h2.604V38.92z M15.39,34.623h-2.604v-6.184h2.604V34.623z M25.155,29.991h-2.604v-6.183h2.604V29.991z
                M25.155,21.104h-2.604V14.92h2.604V21.104z M29.583,38.632h-2.604V32.45h2.604V38.632z M34.4,29.991h-2.604v-6.183H34.4V29.991z
                M49.113,35.54h-2.604v-6.184h2.604V35.54z M49.113,24.195h-2.604v-6.183h2.604V24.195z M49.113,13.885h-2.604V7.703h2.604V13.885z
                M54.582,40.779h-2.604V30.3h2.604V40.779z"/>
            </g>
          </svg>
        </ParallaxLayer>
        <ParallaxLayer offset={1} >
          <div className="container grid grid-cols-2 h-full mx-auto items-center max-md:flex max-md:flex-col max-sm:mx-5">
            <div className="h-full flex flex-col justify-evenly">
              <h1 className='items2 text-8xl text-[#05141A] font-bold max-md:text-6xl max-sm:text-4xl'>About Me</h1>
              <img className="items2 w-[300px] max-md:hidden" src="/public/profile.jpg" alt="profilePic" />
              <ul className='items2 max-md:hidden"'>
                <li>Occupation: Software Engineer</li>
                <li>Education: BA in Biochemistry @ Hunter College</li>
                <li>Languages: Javascript/Typescript, Python</li>
                <li>Technologies: Angular, React, Next, Node, Express, Flask</li>
              </ul>
            </div>
            <Experiences/>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default TheParallax