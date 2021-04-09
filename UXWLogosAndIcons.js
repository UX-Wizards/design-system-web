function UXWLogosAndIcons(props) {
  return (
    <div className="container">
      <div className="flex-col flex-shrink-0 py-4">
        <div className="container">
          <UXWSubsection anchor="snav-logos" title="Logos">
            <p className="max-w-prose">The Wizards hat will always accompany the UX Wizards text.  The rectangular version will be the main logo and includes an arrow cursor as if the logo is being clicked on.</p><br />
            <p className="max-w-prose">The square and circle versions are to be used for things such as our Slack group’s profile.</p><br />
            <p className="pb-4 max-w-prose">There are three variations in colors - white text on black, black text on white and white text on our branded Navy, Magician’s Cloak.</p>
            <img src="assets/logos.png" alt="" />
          </UXWSubsection>
          <UXWSubsection anchor="snav-clearance" title="Clearance">
            <p className="max-w-prose">To ensure that logos are clearly visible, surround with clear space that is free of type, graphics, and other elements to avoid visual clutter.</p>
            <img src="assets/clearance.png" alt="" className="w-3/4"/>
          </UXWSubsection>
          <UXWSubsection anchor="snav-icongraphy" title="Icongraphy Style">
            <p className="max-w-prose">Icon designs are intended to be recognized and communicate immediately. Our main icons are outlined style which use a clear stroke and the Magician’s Cloak navy color. Icon + light purple circle background is a variation. This background pops and draws extra attention to the icons. </p><br />
            <img className="my-16 w-3/4" src="assets/icongraphy.png" alt="" />
          </UXWSubsection>
          <UXWSubsection anchor="snav-library" title="Downloads">
            <p className="pb-16 max-w-prose">Each download includes .png and .svg formats. Also, it comes with other color options.</p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col">
                <div className="flex flex-row bg-gray-200 rounded-t-lg">
                  <div className="text-base py-2 pl-6">
                    Main Logo
                  </div>
                  <div className="flex-grow "></div>
                  <div className="py-2 pr-4">
                    <a href="assets/library/horizontal.zip" download>
                      <i className="bi bi-download text-xl"></i>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center bg-gray-100 rounded-b-lg">
                  <img className="py-8" src="assets/logo-wide-main.svg" alt="" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row bg-gray-200 rounded-t-lg">
                  <div className="text-base py-2 pl-6">
                    Square Logo
                  </div>
                  <div className="flex-grow "></div>
                  <div className="py-2 pr-4">
                    <a href="assets/library/square.zip" download>
                      <i className="bi bi-download text-xl"></i>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center bg-gray-100 rounded-b-lg">
                  <img className="py-8" src="assets/logo-square-main.svg" alt="" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row bg-gray-200 rounded-t-lg">
                  <div className="text-base py-2 pl-6">
                    Circle Logo
                  </div>
                  <div className="flex-grow "></div>
                  <div className="py-2 pr-4">
                    <a href="assets/library/circle.zip" download>
                      <i className="bi bi-download text-xl"></i>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center bg-gray-100 rounded-b-lg">
                  <img className="py-8" src="assets/logo-circle-main.svg" alt="" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row bg-gray-200 rounded-t-lg">
                  <div className="text-base py-2 pl-6">
                    Podcast Logo
                  </div>
                  <div className="flex-grow "></div>
                  <div className="py-2 pr-4">
                    <a href="assets/library/podcast.zip" download>
                      <i className="bi bi-download text-xl"></i>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center bg-gray-100 rounded-b-lg">
                  <img className="py-8" src="assets/podcast.png" alt="" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 my-8">
              <div className="flex flex-col">
                <div className="flex flex-row bg-gray-200 rounded-t-lg">
                  <div className="text-base py-2 pl-6">
                    Icongraphy
                  </div>
                  <div className="flex-grow"></div>
                  <div className="py-2 pr-4">
                    <a href="assets/library/icongraphy.zip" download>
                      <i className="bi bi-download text-xl"></i>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center bg-gray-100 rounded-b-lg">
                  <img className="w-3/5 my-12 h-3/5" src="assets/icongraphy_dl.png" alt="" />
                </div>
              </div>
            </div>
          </UXWSubsection>
        </div>
      </div>
    </div>
  )
}
