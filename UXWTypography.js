
function UXWTypography(props) {
  return (
    <div className="container">
      <UXWSubsection anchor="typography--font" title="Font">
        <p className="max-w-prose">Inspired by the typeface used in road signage all around America, Overpass represents the UX Wizards’ ever expanding reach.
        </p>
        <a href="https://fonts.google.com/specimen/Overpass" target="_blank">↳ Download Overpass</a>
      </UXWSubsection>

      <UXWSubsection anchor="typography--scale" title="Scale">
        <h3 className="text-xl pb-4">How to Use It</h3>
          <div className="flex flex-row pb-4">
            <div className="box w-20 rounded-full uxw-bg-steel-1 text-center mr-4">BASES</div>
              <p> 16px |14px |12px </p>
            </div>

        <p className="max-w-prose">
          This scale works best with 12, 14, or 16 as the base font-size (1em = 16px).
          The scale is absolute, but the font-weight and styling are simply guidelines. 
          Headings can be selected from the scale as necessary, but hierarchy must be consistent across each medium.
          The samples below show the scale with a base of 16px.
        </p>

        <table className="uxw-font-sans w-full text-left table-auto my-4 bg-gray-100">
          <thead>
            <tr className="bg-gray-200 rounded-t-lg">
              <th className="px-4 py-2">Style</th>
              <th className="px-4 py-2">Size (em)</th>
              <th className="px-4 py-2">Size (px)</th>
              <th className="px-4 py-2">Sample</th>
             </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Black</td>
              <td className="px-4 py-2">3.5em</td>
              <td className="px-4 py-2">56px</td>
              <td className="px-4 py-2 uxw-text-display-1">Display-1</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Extra Bold</td>
              <td className="px-4 py-2">2.25em</td>
              <td className="px-4 py-2">36px</td>
              <td className="px-4 py-2 uxw-text-display-2">Display-2</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Bold</td>
              <td className="px-4 py-2">1.75</td>
              <td className="px-4 py-2">28px</td>
              <td className="px-4 py-2 uxw-text-display-3">Display-3</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Regular</td>
              <td className="px-4 py-2">1.5em</td>
              <td className="px-4 py-2">24px</td>
              <td className="px-4 py-2 uxw-text-display-4">Display-4</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Regular</td>
              <td className="px-4 py-2">1.25em</td>
              <td className="px-4 py-2">20px</td>
              <td className="px-4 py-2 uxw-text-display-5">Display-5</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Regular</td>
              <td className="px-4 py-2">1.125em</td>
              <td className="px-4 py-2">18px</td>
              <td className="px-4 py-2 uxw-text-display">Display</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Bold</td>
              <td className="px-4 py-2">1.125em</td>
              <td className="px-4 py-2">18px</td>
              <td className="px-4 py-2 uxw-text-heading">Heading</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Regular</td>
              <td className="px-4 py-2">1em</td>
              <td className="px-4 py-2">16px</td>
              <td className="px-4 py-2 uxw-text-body">Body</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Bold</td>
              <td className="px-4 py-2">1em</td>
              <td className="px-4 py-2">16px</td>
              <td className="px-4 py-2 uxw-button-text">Button</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Regular</td>
              <td className="px-4 py-2">0.875em</td>
              <td className="px-4 py-2">14px</td>
              <td className="px-4 py-2 uxw-text-meta">Meta</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Regular</td>
              <td className="px-4 py-2">0.75em</td>
              <td className="px-4 py-2">12px</td>
              <td className="px-4 py-2 uxw-text-label">Label</td>
            </tr>
          </tbody>
        </table>
        
      </UXWSubsection>

      <UXWSubsection anchor="typography--guidelines" title="Guidelines">
        <h3 className="text-xl pb-4">Leading</h3>
        <p className="max-w-prose">Ideally, body type should have a line-height of at least 125% of the font size. For example, a paragraph of font size 14 with a line-height of 24.
        </p>
        <h3 className="text-xl pb-4 pt-4">Character length</h3>
        <p className="max-w-prose">Limit line length of body text between 50-75 characters for better readability.
        </p>
        <h3 className="text-xl pb-4 pt-4">Accessibility</h3>
        <p className="max-w-prose">Accessibility comes first. Type colors should meet WCAG 2.0 standard for contrast.
          ↳ Color contrast guidelines
        </p>
      </UXWSubsection>



      <UXWSubsection anchor="typography--usage" title="Usage">
        <p className="max-w-prose">Example</p>

        <div className="flex flex-row">
          <div className="flex flex-col"> 
            <p className="box w-20 m-4 rounded-full uxw-bg-steel-1 text-center"> H1 </p>
            <p className="box w-20 m-4 rounded-full uxw-bg-steel-1 text-center"> H2 </p>
            <div className="box w-32 m-4 rounded-full uxw-bg-steel-1 text-center mr-4">PARAGRAPH </div>
            <div className="box w-28 m-4 rounded-full uxw-bg-steel-1 text-center  mr-4">BUTTON </div>
          </div>
          <div className="flex flex-col">
            <p class="m-2 uxw-text-display-1">Design Meets Magic</p>
            <p class="m-2 uxw-text-display-2">The UX Wizards are here. </p>
            <p class="m-2">We're looking for designers of all levels to come on board. Ready to work your wizardly? </p>
            <a className="m-2 w-56 text-center text-white py-4 px-4 from-indigo-600 to-indigo-900 bg-gradient-to-r rounded-md uppercase tracking-widest font-light hover:shadow-2xl transition duration-500 ease-in-out hover:bg-opacity-40"><span style ={{color: "#ffffff"}}>JOIN OUR TEAM</span></a>

          </div>
        </div>


      </UXWSubsection>
    </div>



  );
}
 
      


  



 /* <div class="flex items-center">
        <div className="flex-initial space-x-4">
          <div className="px-4 py-2 uppercase text-xs" style={{fontFamily: "Overpass"}}>
            H1
          </div>
        </div>
        <div className="flex-initial">
          <div className="p-2 font-extrabold" style={{fontFamily: "Overpass", fontSize: "3.375em"}}>
            Design Meets Magic
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <div className="flex-initial">
          <div className="px-4 py-2 uppercase text-xs" style={{fontFamily: "Overpass"}}>H2
          </div>
        </div>
        <div className="p-2 font-bold" style={{fontFamily: "Overpass", fontSize: "1.75em", lineHeight: 1}}>The UX Wizards are here.</div>
      </div>
      <div class="flex items-center">
        <div className="flex-initial">
          <div className="px-4 py-2 uppercase text-xs" style={{fontFamily: "Overpass"}}>paragraph
          </div>
        </div>
        <div className="p-2" style={{fontFamily: "Overpass"}}>We’re looking for designers of all levels to com on board. Ready to work your wizardry?</div>
      </div>*/
