function ModalMe () {
  return (
    <>
      <svg width="200px" height="200px" viewBox="0 0 36 36" aria-hidden="true" role="img" className="animate-bounce absolute top-[51%] left-[40%] iconify iconify--twemoji" 
      onClick={()=>document.getElementById('my_modal_2').showModal()}
      preserveAspectRatio="xMidYMid meet">
            <path fill="#F3D2A2" d="M14 22a1 1 0 1 1-2 0v-8a1 1 0 0 1 2 0v8zm10 0a1 1 0 1 1-2 0v-8a1 1 0 1 1 2 0v8z"></path>
            <path fill="#66757F" d="M19 19h-5l1 11h3v-7v7h3l1-11z"></path><path fill="#546170" d="M18 23c-.552 0-1 7-1 7c0 .553.448 0 1 0c.553 0 1 .553 1 0c0 0-.447-7-1-7z"></path>
            <path fill="#292F33" d="M22.175 11.639c-1.191-.273-2.172-.639-2.172-.639H16s-.981.366-2.172.639c-1.322.303-1.828.864-1.828 1.968V21h2v1h2l2.003-1l2 1h2v-1h2v-7.393c0-1.104-.507-1.665-1.828-1.968zm-5.535 17.84c1.105 0 1.346.159 1.359.521c.052 1.375-1.786 3.479-3.141 2.979c-.86-.317-.422-1.901.141-2.979c.23-.441.962-.521 1.641-.521z"></path>
            <path fill="#292F33" d="M19.36 29.479c-1.105 0-1.346.159-1.359.521c-.051 1.375 1.787 3.479 3.141 2.979c.86-.317.422-1.901-.141-2.979c-.23-.441-.961-.521-1.641-.521z"></path>
            <path fill="#FFE51E" d="M19.314 2.613c-.678-.219-2.274-.16-2.673.359c-1.037.02-2.254.957-2.414 2.194c-.158 1.224.194 1.792.319 2.713c.142 1.043.728 1.376 1.197 1.516c.674.891 1.391.853 2.595.853c2.351 0 3.47-1.573 3.569-4.244c.061-1.616-.887-2.84-2.593-3.391z"></path>
            <path fill="#F3D2A2" d="M16.798 9.576h2.411v3.015h-2.411z"></path>
            <path fill="#F3D2A2" d="M20.659 6.118c-.227-.315-.519-.568-1.157-.658c.239.11.469.489.499.698c.03.209.06.379-.13.17c-.759-.839-1.586-.509-2.405-1.021c-.572-.358-.747-.754-.747-.754s-.07.529-.938 1.067c-.252.156-.552.504-.718 1.017c-.12.369-.083.698-.083 1.261c0 1.642 1.353 3.022 3.022 3.022c1.669 0 3.022-1.392 3.022-3.022c.001-1.022-.106-1.421-.365-1.78z"></path>
            <path fill="#C1694F" d="M19.346 9.576H16.66s.336.672 1.343.672s1.343-.672 1.343-.672zm-1.007-.839h-.672a.168.168 0 1 1 0-.336h.672a.168.168 0 1 1 0 .336z"></path>
            <path fill="#546170" d="M19.803 13.2l1.276-1.2l-.569-.883l-.507-.117l-.221.57z"></path><path fill="#66757F" d="M17.997 18l3.099-5.045l-1.271-1.361z"></path>
            <path fill="#546170" d="M16.2 13.2L14.924 12l.569-.883L16 11l.221.57z"></path><path fill="#66757F" d="M18 18l-3.099-5.045l1.271-1.361z"></path>
            <path fill="#E1E8ED" d="M18 18l-2-7l2 1l2-1z"></path><path fill="#292F33" d="M19 12l-1-.417L17 12l.878.878l-.793 1.918L18 18l.915-3.204l-.793-1.918z"></path>
            <path fill="#F5F8FA" d="M16.562 10.562L18 11.583l-.938.995L16 11zm2.876 0L18 11.583l.938.995L20 11z"></path>
            <ellipse fill="#99AAB5" cx="18" cy="35" rx="6" ry="1"></ellipse>
            <path fill="#292F33" d="M20.324 3.977c.612-.166 1.091-.411 1.091-.411s-.141-.578-.283-.95c-.442-1.154-1.175-1.729-1.849-1.558c-1.019.259-1.496.11-2.712-.034c-1.215-.144-1.773 1.682-1.968 2.542c0 0 .322.274.902.403c.022.005.05.008.073.013c-2.094.094-2.787.351-2.787.852c0 .66 2.336 1.333 5.219 1.333c2.882 0 5.219-.673 5.219-1.333c-.002-.511-.723-.767-2.905-.857z"></path>
            <path fill="#66757F" d="M21.583 4.225a3.748 3.748 0 0 0-.169-.659s-1.101.429-3.406.429s-3.406-.429-3.406-.429s-.078.214-.126.439a7 7 0 0 0-.043.22c-.048.273.081.461.966.649c.6.127 1.582.241 2.608.22c1.026.021 2.009-.093 2.608-.22c.888-.188 1.017-.376.968-.649z"></path>
            <path fill="#292F33" d="M21.492 5.897l-.958.316c-.337-.047-1.038-.066-1.779.015c-.197.022-.272.078-.739.078c-.466 0-.542-.056-.739-.078c-.741-.081-1.442-.062-1.779-.015l-.958-.316c-.093-.033-.191.019-.221.111s.02.19.111.221l.894.295c.066.051.208.148.242.248c.039.116.117.861.35 1.055c.241.2 1.148.125 1.322.039c.389-.194.437-.82.505-1.094c.039-.155.272-.155.272-.155s.233 0 .272.155c.069.274.117.902.505 1.096c.174.087 1.081.161 1.322-.039c.233-.194.311-.941.35-1.057c.033-.1.175-.196.241-.247l.895-.295a.174.174 0 0 0 .111-.221a.172.172 0 0 0-.219-.112z"></path>
      </svg>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <p>
            I'm a Software Engineer located in New York and I enjoy building creative an unique programs.
          </p>
          <br />
          <p>  
            Some of the main technologies I have worked on includes React, Angular, Next, NodeJs, and Flask.
          </p>
          <br />
          <img src="/public/profile.jpg" alt="profilePic" />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}
export default ModalMe;