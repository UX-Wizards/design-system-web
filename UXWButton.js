function UXWButton(props) {
  return (
    <div className="container">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p className="pb-4 max-w-prose">
          Buttons indicates an action therefore text or icon + text on the button expresses what action will occur when you press it.   
          </p>
        </div>
        <div className="flex-grow"></div>
      </div>
      <UXWSubsection anchor="#" title="Button">
        <p className="pb-4 max-w-prose">
        To use this components, you need to include <span className="uxw-code">uxwcore.css</span> and <span className="uxw-code">uxw.css.</span> {"\n"}
        Read more about <a href="/introduction" target="_blank">Installation and Usage </a>to learn how this works. 
        </p>
        <div className="flex max-w-prose p-4 my-4 uxw-bg-steel-2 rounded-lg border-black rounded-md shadow-inner"><p className="max-w-prose">Use CSS class names on your HTML elements to apply the style. You don’t need to write CSS once you included <span className="uxw-code">uxwcore.css </span> and <span className="uxw-code">uxw.css</span> on your file.</p></div>
        <div className="max-w-7xl grid grid-cols-3 gap-8 my-10">
          <a href="#">
            <div className="py-4 px-6 bg-gray-100 text-lg font-bold rounded-lg">
              <p>Color Classes</p>
              <img src="assets/comp-1.svg" className="mx-auto my-10" alt=""/>
            </div>
          </a>
     
        </div>
      </UXWSubsection>
    </div>
  )
}
