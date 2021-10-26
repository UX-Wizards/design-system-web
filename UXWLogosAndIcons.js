function UXWLogosAndIcons(props) {
  return (
    <div className="container">
      <div className="flex-col flex-shrink-0 py-4">
        <div className="container">
          <UXWSubsection anchor="snav-logos" title="Logos">
            <p className="max-w-prose">Our primary logo combines our brand mark, wizard hat, and the UX WIZARDS text. Wherever possible, we aim to use the primary logo in full-color.</p><br />
            <p className="max-w-prose">The circle logo variations are to be used as social media icons and graphics. Word Mark is often incoorporate with graphic and for the banners. </p><br />
          </UXWSubsection>
          <UXWSubsection anchor="snav-clearance" title="Primary Logo">
            <p className="max-w-prose">The main logo should be used in this form whenever possible. The inverted version features a greater legibility on dark or busy backgrounds.</p>
            <img src="assets/primary_logo.png" alt="" className="w-2/4"/>
          </UXWSubsection>
          <UXWSubsection anchor="snav-icongraphy" title="Monotone Logos">
            <p className="max-w-prose">When our primary or full-color logos aren’t an option, use the monotone logo that provides the most contrast. </p><br />
            <img className="w-2/4" src="assets/monotone_logo.png" alt="" className="w-2/4" />
          </UXWSubsection>
          <UXWSubsection anchor="snav-icongraphy" title="Word Mark">
            <img className="w-3/4" src="assets/word_mark.png" alt="" />
          </UXWSubsection>
          <UXWSubsection anchor="snav-icongraphy" title="Clearance">
            <img className="w-3/4" src="assets/clearance.png" alt="" />
          </UXWSubsection>
          <UXWSubsection anchor="snav-icongraphy" title="Icon Style">
          <p className="max-w-prose">Icon designs are intended to be recognized and communicate immediately. </p><br />
          <p className="max-w-prose">Our main icons are outlined style which use a clear stroke and the Magician’s Cloak navy color. </p><br />
          <p className="max-w-prose">Icon + light purple circle background is a variation. This background pops and draws extra attention to the icons. </p><br />
          {/* <p className="max-w-prose">Icon designs are intended to be recognized and communicate immediately. Our main icons are outlined style which use a clear stroke and the Magician’s Cloak navy color. Icon + light purple circle background is a variation. This background pops and draws extra attention to the icons. </p><br /> */}
            <img className="w-3/4" src="assets/icon_style.png" alt="" />
          </UXWSubsection>
          
          <UXWSubsection anchor="snav-library" title="Downloads">
            <p className="pb-16 max-w-prose">Each download includes .png and .svg formats. Also, it comes with other color options.</p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col">
                <div className="flex flex-row bg-gray-200 rounded-t-lg">
                  <div className="text-base py-2 pl-6">
                  Primary Logo
                  </div>
                  <div className="flex-grow "></div>
                  <div className="py-2 pr-4">
                    <a href="assets/library/horizontal.zip" download>
                      <i className="bi bi-download text-xl"></i>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center bg-gray-100 rounded-b-lg">
                  <img className="py-8" src="assets/logo-primary.svg" alt="" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row bg-gray-200 rounded-t-lg">
                  <div className="text-base py-2 pl-6">
                  Circle Logo
                  </div>
                  <div className="flex-grow "></div>
                  <div className="py-2 pr-4">
                    <a href="assets/library/square.zip" download>
                      <i className="bi bi-download text-xl"></i>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center bg-gray-100 rounded-b-lg">
                  <img className="py-8" src="assets/logo-circle.svg" alt="" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row bg-gray-200 rounded-t-lg">
                  <div className="text-base py-2 pl-6">
                  Word Mark
                  </div>
                  <div className="flex-grow "></div>
                  <div className="py-2 pr-4">
                    <a href="assets/library/circle.zip" download>
                      <i className="bi bi-download text-xl"></i>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row justify-center bg-gray-100 rounded-b-lg">
                  <img className="py-16" src="assets/logo-wordmark.svg" alt="" />
                </div>
              </div>
              {/* <div className="flex flex-col">
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
              </div> */}
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
                  <img className="w-3/5 my-12 self-start" src="assets/icongraphy_dl.png" alt="" />
                </div>
              </div>
            </div>
          </UXWSubsection>
        </div>
      </div>
    </div>
  )
}
