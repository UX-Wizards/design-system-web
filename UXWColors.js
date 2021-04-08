function UXWColors(props) {
  return (
    <div className="container">




      <UXWSubsection anchor="colors--thinking" title="Our Thinking">
        <span className="pb-12"></span>

        <p className="pb-12">
          Our palette consists of neutral, pleasing tones balanced by vivid
          and eccentric colors. This color palette has been carefully chosen
          to provide versatility and function while still providing boundless
          room for expression.
      </p>
      </UXWSubsection>

      <UXWSubsection anchor="colors--palette" title="Using Our Palette">



        <p className="pb-12">
          Though our palette is established, we encourage experimentation
          through blending modes and gradients. Start with the base color in
          the left column, and supplement your designs with the alternate shades
          on the right if you want to play around. You might be surprised... the
          results could be spellbinding!
        </p>
      </UXWSubsection>

      <hr className="pt-8"></hr>

      <UXWSubsection anchor="colors--primary" title="Primary Colors">

      <div className="flex flex-row">

      <div className="flex flex-auto w-2/3 uxw-bg-steel-2 border-black rounded-md shadow-inner items-center justify-center py-4 px-2 mt-4 mb-16">

        <p>
          The flexible and neutral <span className="font-bold">Magician's Cloak</span>,
          <span className="font-bold"> Acid</span>, and <span className="font-bold">Merlin's Beard</span> lead the way, providing a well-balanced foundation.
        </p>

      </div>

      </div>

        <div className="flex flex-col flex-wrap flex-grow">



          <p className="font-bold font-2xl pb-4">
            Magician's Cloak
         </p>


          <div className="flex flex-row pb-16">

            <div className="flex flex-col w-1/2 ">

              <div className="box w-2/3 rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1">Base color</div>

              <div className="flex flex-row p-8 uxw-bg-steel-1 mt-4 w-2/3 items-center justify-center">
                <div className="box h-32 w-32 rounded-lg ring-2 ring-gray-200 ring-offset-4 uxw-bg-magicians-cloak-1 shadow-2xl m-4 z-1">
                  <p className="z-2 text-left text-white pl-4 pt-2"><span className="text-black font-bold">A </span>FAIL</p>
                  <p className="z-2 text-left text-white pl-4"><span className="text-white font-bold">A </span>PASS</p>
                </div>

                <p className="text-left px-4 pt-6 col-span-2 pb-4">
                  <span className="font-bold">HEX:</span> <span className="font-normal">152145</span><br />
                  <span className="font-bold">RGB:</span> <span className="font-normal">21, 33, 69</span><br />
                  <span className="font-bold">CMYK:</span> <span className="font-normal">19, 14, 0, 79</span>
                </p>
              </div>

              <div className="w-2/3">
                <UXWCodePanelHTMLCSS>
                  <div>
{`
<h1 class="uxw-bg-magicians-cloak-1">
  Hello World
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-magicians-cloak-1 {
  background-color: #145152
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>
              </div>

            </div>


            <div className="flex flex-col w-1/2">

              <div className="box w-full rounded-full uxw-bg-magicians-cloak-2 text-white text-center h-8 pt-1">Alternate shades</div>

              <div className="flex flex-col">

                <div className="flex flex-row mx-4 mt-4">

                  <div className="flex flex-none w-1/2 items-center justify-center">
                    <div className="box h-20 w-20 rounded-md uxw-bg-magicians-cloak-2 ring ring-gray-200 ring-offset-2 shadow-lg shadow-inner m-4">
                      <p className="z-2 text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                      <p className="z-2 text-left text-white pl-2"><span className="text-white font-bold">A </span>PASS</p>
                    </div>

                    <p className="text-left p-4">
                      <span className="font-bold">HEX:</span> <span className="font-normal">5267A7</span><br />
                      <span className="font-bold">RGB:</span> <span className="font-normal">82, 103, 167</span><br />
                      <span className="font-bold">CMYK:</span> <span className="font-normal">76, 63, 6, 0</span>
                    </p>
                  </div>

                  <div className="m-2">
                    <UXWCodePanelHTMLCSS>
                      <div>
{`
<h1 class="uxw-bg-magicians-cloak-2">
  Hello World
</h1>
`}
                      </div>
                      <div>
{`
.uxw-bg-magicians-cloak-2 {
  background-color: #5267A7
}
`}
                      </div>
                    </UXWCodePanelHTMLCSS>
                  </div>

                </div>

                <div className="flex flex-row mx-4 mb-4">

                  <div className="flex flex-none w-1/2 items-center justify-center">
                    <div className="box h-20 w-20 rounded-md uxw-bg-magicians-cloak-3 ring ring-white ring-offset-2 shadow-lg shadow-inner m-4">
                      <p className="z-2 text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                      <p className="z-2 text-left text-white pl-2"><span className="text-white font-bold">A </span>PASS</p>
                    </div>

                    <p className="text-left p-4 col-span-2">
                      <span className="font-bold">HEX:</span> <span className="font-normal">2E3E6E</span><br />
                      <span className="font-bold">RGB:</span> <span className="font-normal">46, 62, 110</span><br />
                      <span className="font-bold">CMYK:</span> <span className="font-normal">93, 83, 30, 17</span>
                    </p>
                  </div>

                  <div className="m-2">
                    <UXWCodePanelHTMLCSS>
                      <div>
{`
<h1 class="uxw-bg-magicians-cloak-3">
  Hello World
</h1>
`}
                      </div>
                      <div>
{`
.uxw-bg-magicians-cloak-3 {
  background-color: #2E3E6E
}
`}
                      </div>
                    </UXWCodePanelHTMLCSS>
                  </div>

                </div>

              </div>




            </div>


          </div>





          <div className="flex flex-col flex-wrap flex-grow">

          <p className="font-bold font-2xl pb-4">
            Acid
         </p>


          <div className="flex flex-row pb-16">

            <div className="flex flex-col w-1/2">

              <div className="box w-2/3 rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1">Base color</div>

              <div className="flex flex-row p-8 uxw-bg-steel-1 w-2/3 mt-4 items-center justify-center">
                <div className="box h-32 w-32 rounded-lg ring-2 ring-gray-200 ring-offset-4 uxw-bg-acid-1 shadow-2xl m-4 z-1">
                  <p className="text-left text-white pl-4 pt-2"><span className="text-black font-bold">A </span>FAIL</p>
                  <p className="text-left text-white pl-4"><span className="text-white font-bold">A </span>PASS</p>
                </div>

                <p className="text-left px-4 pt-6 col-span-2 pb-4">
                  <span className="font-bold">HEX:</span> <span className="font-normal">6331FD</span><br />
                  <span className="font-bold">RGB:</span> <span className="font-normal">99, 49, 253</span><br />
                  <span className="font-bold">CMYK:</span> <span className="font-normal">60, 80, 0, 1</span>
                </p>
              </div>

              <div className="w-2/3">
                <UXWCodePanelHTMLCSS>
                  <div>
{`
<h1 class="uxw-bg-acid-1">
  Hello World
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-acid-1 {
  background-color: #6331FD
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>
              </div>

            </div>


            <div className="flex flex-col w-1/2">

              <div className="box w-full rounded-full uxw-bg-magicians-cloak-2 text-white text-center h-8 pt-1">Alternate shades</div>

              <div className="flex flex-col">

              <div className="flex flex-row mx-4 mt-4">

                <div className="flex flex-none w-1/2 items-center justify-center">
                 <div className="box h-20 w-20 rounded-md uxw-bg-acid-2 ring ring-white ring-offset-2 shadow-lg shadow-inner m-4 z-1">
                    <p className="z-2 text-left text-black pl-2 pt-1"><span className="text-black font-bold">A </span>PASS</p>
                    <p className="z-2 text-left text-black pl-2"><span className="text-white font-bold">A </span>FAIL</p>
                 </div>

                  <p className="text-left p-4">
                    <span className="font-bold">HEX:</span> <span className="font-normal">D5CCFB</span><br />
                    <span className="font-bold">RGB:</span> <span className="font-normal">213, 204, 251</span><br />
                    <span className="font-bold">CMYK:</span> <span className="font-normal">14, 18, 0, 0</span>
                  </p>
                </div>

                <div className="m-2">
                    <UXWCodePanelHTMLCSS>
                      <div>
{`
<h1 class="uxw-bg-acid-2">
  Hello World
</h1>
`}
                      </div>
                      <div>
{`
.uxw-bg-acid-2 {
  background-color: #D5CCFB
}
`}
                      </div>
                    </UXWCodePanelHTMLCSS>
                 </div>

                 </div>

              <div className="flex flex-row mx-4 mb-4">

                <div className="flex flex-none w-1/2 items-center justify-center">

                 <div className="box h-20 w-20 rounded-md uxw-bg-acid-3 ring ring-white ring-offset-2 shadow-lg shadow-inner m-4 z-1">
                    <p className="z-2 text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                    <p className="z-2 text-left text-white pl-2"><span className="font-bold">A </span>PASS</p>
                 </div>

                  <p className="text-left p-4 col-span-2">
                    <span className="font-bold">HEX:</span> <span className="font-normal">3822AC</span><br />
                    <span className="font-bold">RGB:</span> <span className="font-normal">56, 34, 172</span><br />
                    <span className="font-bold">CMYK:</span> <span className="font-normal">90, 92, 0, 0</span>
                  </p>

                </div>

                <div className="m-2">
                    <UXWCodePanelHTMLCSS>
                      <div>
{`
<h1 class="uxw-bg-acid-3">
  Hello World
</h1>
`}
                      </div>
                      <div>
{`
.uxw-bg-acid-3 {
  background-color: #3822AC
}
`}
                      </div>
                    </UXWCodePanelHTMLCSS>
                 </div>

              </div>

              </div>
            </div>
            </div>


          <div className="flex flex-col flex-wrap flex-grow">

            <p className="font-bold font-2xl pb-4">
              Merlin's Beard
            </p>


            <div className="flex flex-row pb-10">

              <div className="flex flex-col w-1/2">

                <div className="box w-2/3 rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1">Base color</div>

                <div className="flex flex-row p-8 mt-4 uxw-bg-steel-1 w-2/3">

                  <div className="box h-32 w-32 rounded-lg ring-2 ring-gray-200 ring-offset-4 uxw-bg-merlins-beard-1 shadow-lg border m-4 z-1">
                    <p className="z-2 text-left pl-4 pt-2"><span className="text-black font-bold">A </span>PASS</p>
                    <p className="z-2 text-left text-black pl-2"><span className="text-white font-bold">A </span>FAIL</p>
                  </div>

                  <p className="text-left px-4 pt-6pb-4">
                    <span className="font-bold">HEX:</span> <span className="font-normal">FFFFFF</span><br />
                    <span className="font-bold">RGB:</span> <span className="font-normal">255, 255, 255</span><br />
                    <span className="font-bold">CMYK:</span> <span className="font-normal">0, 0, 0, 0</span>
                  </p>

                </div>

                <div className="w-2/3">
                <UXWCodePanelHTMLCSS>
                  <div>
{`
<h1 class="uxw-bg-merlins-beard-1">
  Hello World
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-merlins-beard-1 {
  background-color: #FFFFFF
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>
              </div>

              </div>


              <div className="flex flex-col w-1/2">

                <div className="box w-full rounded-full uxw-bg-magicians-cloak-2 text-white text-center h-8 pt-1">Alternate shades</div>

                <div className="flex flex-col">

                  <div className="flex flex-row mx-4 mt-4">

                    <div className="flex flex-none w-1/2 items-center justify-center">

                      <div className="box h-20 w-20 rounded-md uxw-bg-merlins-beard-2 ring ring-white ring-offset-2 shadow-lg shadow-inner m-4 z-1">
                       <p className="z-2 text-left pl-2 pt-1"><span className="text-black font-bold">A </span>PASS</p>
                       <p className="z-2 text-left text-black pl-2"><span className="text-white font-bold">A </span>FAIL</p>
                      </div>

                      <p className="text-left col-span-2 py-4">
                        <span className="font-bold">HEX:</span> <span className="font-normal">E6E6E6</span><br />
                        <span className="font-bold">RGB:</span> <span className="font-normal">230, 230, 230</span><br />
                        <span className="font-bold">CMYK:</span> <span className="font-normal">9, 6, 7, 0</span>
                      </p>

                    </div>

                    <div className="m-2">
                      <UXWCodePanelHTMLCSS>
                        <div>
{`
<h1 class="uxw-bg-merlins-beard-2">
  Hello World
</h1>
`}
                        </div>
                        <div>
{`
.uxw-bg-merlins-beard-2 {
  background-color: #E6E6E6
}
`}
                        </div>
                      </UXWCodePanelHTMLCSS>
                    </div>

                  </div>

                  <div className="flex flex-row mx-4">

                    <div className="flex flex-none w-1/2 items-center justify-center">

                      <div className="box h-20 w-20 rounded-md uxw-bg-merlins-beard-3 ring ring-white ring-offset-2 shadow-lg shadow-inner m-4">
                        <p className="z-2 text-left pl-2 pt-1"><span className="text-black font-bold">A </span>PASS</p>
                        <p className="z-2 text-left text-black pl-2"><span className="text-white font-bold">A </span>FAIL</p>
                      </div>

                      <p className="text-left col-span-2 pt-4 pb-4">
                        <span className="font-bold">HEX:</span> <span className="font-normal">C9CACB</span><br />
                        <span className="font-bold">RGB:</span> <span className="font-normal">201, 202, 203</span><br />
                        <span className="font-bold">CMYK:</span> <span className="font-normal">21, 16, 16, 0</span>
                      </p>

                    </div>

                    <div className="m-2">
                      <UXWCodePanelHTMLCSS>
                        <div>
{`
<h1 class="uxw-bg-merlins-beard-3">
  Hello World
</h1>
`}
                        </div>
                        <div>
{`
.uxw-bg-merlins-beard-3 {
  background-color: #C9CACB
}
`}
                        </div>
                      </UXWCodePanelHTMLCSS>
                    </div>

                  </div>

                  <div className="flex flex-row mx-4 mb-4">

                    <div className="flex flex-none w-1/2 items-center justify-center">

                    <div className="box h-20 w-20 rounded-md uxw-bg-merlins-beard-4 ring ring-white ring-offset-2 shadow-lg shadow-inner m-4">
                      <p className="z-2 text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                      <p className="z-2 text-left text-white pl-2"><span className="text-white font-bold">A </span>PASS</p>
                    </div>

                    <p className="text-left col-span-2 pt-4 pb-4">
                      <span className="font-bold">HEX:</span> <span className="font-normal">747887</span><br />
                      <span className="font-bold">RGB:</span> <span className="font-normal">116, 120, 135</span><br />
                      <span className="font-bold">CMYK:</span> <span className="font-normal">58, 48, 36, 7</span>
                    </p>
                    </div>

                    <div className="m-2">
                      <UXWCodePanelHTMLCSS>
                        <div>
{`
<h1 class="uxw-bg-merlins-beard-4">
  Hello World
</h1>
`}
                        </div>
                        <div>
{`
.uxw-bg-merlins-beard-4 {
  background-color: #747887
}
`}
                        </div>
                      </UXWCodePanelHTMLCSS>
                    </div>

                  </div>



                </div>


              </div>

            </div>
        </div>
        </div>
        </div>

      </UXWSubsection>

      <hr className="pb-10"></hr>

      <UXWSubsection anchor="colors--secondary" title="Supporting Colors">
        <span className="pb-b"></span>

      <div className="flex flex-row">

        <div className="flex flex-auto w-2/3 uxw-bg-steel-2 border-black rounded-md shadow-inner items-center justify-center py-4 px-2 mt-8 mb-12">
          <p>
            The foundation colors are balanced by the livelier colors <span className="font-bold">Steel,
            Mana, Jinx,</span> and <span className="font-bold">Elixir</span>. We break these into two categories.
          </p>
        </div>

      </div>

      <p className="uxw-text-display-3 pb-8">Secondary Colors</p>

        <div className="flex flex-auto w-full bg-transparent">

        <p className="pb-16">Our secondary colors are the supporting tones
          of <span className="font-bold">Steel</span> and <span className="font-bold">Mana</span>. Use them to help build environments within your UX
          Wizards content.
        </p>
        </div>



        <div className="flex flex-col flex-wrap flex-grow">

          <p className="font-bold font-2xl pb-4">
            Steel <span className="font-normal">(secondary)</span>
          </p>


       <div className="flex flex-row pb-10">

         <div className="flex flex-col w-1/2">

          <div className="box w-2/3 rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1">Base color</div>

          <div className="flex flex-row p-8 mt-4 uxw-bg-steel-1 w-2/3">

            <div className="box h-32 w-32 rounded-lg ring-2 ring-gray-200 ring-offset-4 uxw-bg-steel-1 shadow-xl m-4 z-1">
              <p className="text-left text-black pl-4 pt-2"><span className=" font-bold">A </span>PASS</p>
              <p className="text-left text-black pl-4"><span className="text-white font-bold">A </span>FAIL</p>
            </div>

            <p className="text-left px-4 pt-6 col-span-2 pb-4">
              <span className="font-bold">HEX:</span> <span className="font-normal">E2E6FB</span><br />
              <span className="font-bold">RGB:</span> <span className="font-normal">226, 230, 251</span><br />
              <span className="font-bold">CMYK:</span> <span className="font-normal">9, 7, 0, 0</span>
            </p>

          </div>

          <div className="w-2/3">

          <UXWCodePanelHTMLCSS>
              <div>
{`
<h1 class="uxw-bg-steel-1">
  Hello World
</h1>
`}
              </div>
              <div>
{`
.uxw-bg-steel-1 {
  background-color: #E2E6FB
}
`}
              </div>
          </UXWCodePanelHTMLCSS>

          </div>

         </div>

         <div className="flex flex-col w-1/2">

            <div className="box w-full rounded-full uxw-bg-magicians-cloak-2 text-white text-center h-8 pt-1">Alternate shades</div>

            <div className="flex flex-row mx-4 mt-4">

              <div className="flex flex-none w-1/2 items-center justify-center">

                <div className="box h-20 w-20 rounded-md uxw-bg-steel-2 ring ring-white ring-offset-2 shadow-lg shadow-inner m-4">
                  <p className="text-left text-black pl-2 pt-4"><span className=" font-bold">A </span>PASS</p>
                  <p className="text-left text-black pl-2"><span className="text-white font-bold">A </span>FAIL</p>
                </div>

                <p className="text-left col-span-2 pt-4 pb-4">
                  <span className="font-bold">HEX:</span> <span className="font-normal">F6F9FD</span><br />
                  <span className="font-bold">RGB:</span> <span className="font-normal">246, 249, 235</span><br />
                  <span className="font-bold">CMYK:</span> <span className="font-normal">2, 1, 0, 0</span>
                </p>

              </div>

              <div className="m-2">

                <UXWCodePanelHTMLCSS>
                  <div>
{`
<h1 class="uxw-bg-steel-2">
  Hello World
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-steel-2 {
  background-color: #F6F9FD
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>

              </div>

            </div>

            <div className="flex flex-row mx-4 mt-4">

              <div className="flex flex-none w-1/2 items-center justify-center">

                <div className="box h-20 w-20 rounded-md uxw-bg-steel-3 ring ring-white ring-offset-2 shadow-lg shadow-inner m-4">
                  <p className="text-left text-black pl-2 pt-1"><span className=" font-bold">A </span>PASS</p>
                  <p className="text-left text-black pl-2"><span className="text-white font-bold">A </span>FAIL</p>
               </div>

                <p className="text-left col-span-2 pt-4 pb-4">
                  <span className="font-bold">HEX:</span> <span className="font-normal">CDD5F2</span><br />
                  <span className="font-bold">RGB:</span> <span className="font-normal">205, 213, 242</span><br />
                  <span className="font-bold">CMYK:</span> <span className="font-normal">17, 12, 0, 0</span>
                </p>

              </div>

              <div className="m-2">

                <UXWCodePanelHTMLCSS>
                  <div>
{`
<h1 class="uxw-bg-steel-3">
  Hello World
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-steel-3 {
  background-color: #CDD5F2
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>

              </div>

            </div>

         </div>

       </div>

        </div>


        <div className="flex flex-col flex-wrap flex-grow">

          <p className="font-bold font-2xl pb-4">
            Mana <span className="font-normal">(secondary)</span>
          </p>

          <div className="flex flex-row pb-10">

            <div className="flex flex-col w-1/2">


              <div className="box w-2/3 rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1">Base color</div>


              <div className="flex flex-row p-8 mt-4 uxw-bg-steel-1 w-2/3">

                <div className="box h-32 w-32 rounded-lg ring-2 ring-gray-200 ring-offset-4 uxw-bg-mana-1 shadow-2xl m-4">
                  <p className="text-left text-black pl-4 pt-2"><span className=" font-bold">A </span>FAIL</p>
                  <p className="text-left text-white pl-4"><span className="text-white font-bold">A </span>PASS</p>
                </div>

                <p className="text-left col-span-2 pt-4 pb-4">
                  <span className="font-bold">HEX:</span> <span className="font-normal">52B9D3</span><br />
                  <span className="font-bold">RGB:</span> <span className="font-normal">82, 185, 211</span><br />
                  <span className="font-bold">CMYK:</span> <span className="font-normal">62, 7, 13, 0</span>
                </p>

              </div>

              <div className="w-2/3">
                <UXWCodePanelHTMLCSS>
                  <div>
{`
<h1 class="uxw-bg-mana-1">
  Hello World
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-mana-1 {
  background-color: #52B9D3
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>
              </div>


            </div>



            <div className="flex flex-col w-1/2">

              <div className="box w-full rounded-full uxw-bg-magicians-cloak-2 text-white text-center h-8 pt-1">Alternate shades</div>

              <div className="flex flex-col pb-12">

                <div className="flex flex-row mx-4 mt-4">

                  <div className="flex flex-none w-1/2 items-center justify-center">

                    <div className="box h-20 w-20 rounded-md uxw-bg-mana-2 ring ring-white ring-offset-2 shadow-lg shadow-inner m-4">
                      <p className="text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                      <p className="text-left text-white pl-2"><span className="font-bold">A </span>PASS</p>
                    </div>

                    <p className="text-left col-span-2 pt-4 pb-4">
                      <span className="font-bold">HEX:</span> <span className="font-normal">68DAF9</span><br />
                      <span className="font-bold">RGB:</span> <span className="font-normal">104, 120, 135</span><br />
                      <span className="font-bold">CMYK:</span> <span className="font-normal">49, 0, 3, 0</span>
                  </p>

                  </div>

                  <div className="m-2">
                      <UXWCodePanelHTMLCSS>
                        <div>
{`
<h1 class="uxw-bg-mana-2">
  Hello World
</h1>
`}
                        </div>
                        <div>
{`
.uxw-bg-mana-2 {
  background-color: #68DAF9
}
`}
                        </div>
                      </UXWCodePanelHTMLCSS>
                  </div>

                </div>


                <div className="flex flex-row mx-4">

                  <div className="flex flex-none w-1/2 items-center justify-center">

                    <div className="box h-20 w-20 rounded-md uxw-bg-mana-3 ring ring-white ring-offset-2 shadow-lg shadow-inner m-4">
                      <p className="text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                      <p className="text-left text-white pl-2"><span className="text-white font-bold">A </span>PASS</p>
                    </div>

                    <p className="text-left col-span-2 pt-4 pb-4">
                      <span className="font-bold">HEX:</span> <span className="font-normal">4999AE</span><br />
                      <span className="font-bold">RGB:</span> <span className="font-normal">73, 153, 174</span><br />
                      <span className="font-bold">CMYK:</span> <span className="font-normal">71, 26, 26, 1</span>
                   </p>

                  </div>

                  <div className="m-2">
                      <UXWCodePanelHTMLCSS>
                        <div>
{`
<h1 class="uxw-bg-mana-3">
  Hello World
</h1>
`}
                        </div>
                        <div>
{`
.uxw-bg-mana-3 {
  background-color: #4999AE
}
`}
                        </div>
                      </UXWCodePanelHTMLCSS>
                    </div>

                </div>



              </div>

            </div>

          </div>

        </div>
</UXWSubsection>

        <hr className="py-8"></hr>

<UXWSubsection anchor="colors--accent" title="Accent Colors">

        <div className="flex w-full bg-transparent">
        <p className="pb-12">Our brighter accent colors should be used with
          restraint and finesse. We want our designs to stand out,
          but avoid being tacky and distasteful. Use <span className="font-bold">Jinx</span> and <span className="font-bold">Elixir</span> to specifically
          draw attention to things on purpose.
        </p>
        </div>


        <div className="flex flex-col flex-wrap flex-grow">

          <p className="font-bold font-2xl pb-4">
            Jinx <span className="font-normal">(accent)</span>
          </p>

          <div className="flex flex-row pb-10">

            <div className="flex flex-col w-1/2">

              <div className="box w-2/3 rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1">Base color</div>

              <div className="flex flex-row p-8 mt-4 uxw-bg-steel-1 w-2/3">

                <div className="box h-32 w-32 rounded-lg ring-2 ring-gray-200 ring-offset-4 uxw-bg-jinx-1 shadow-2xl m-4">
                  <p className="text-left text-white pl-4 pt-2"><span className="text-black font-bold">A </span>FAIL</p>
                  <p className="text-left text-white pl-4"><span className="font-bold">A </span>PASS</p>
                </div>

                <p className="text-left col-span-2 pt-4 pb-4">
                  <span className="font-bold">HEX:</span> <span className="font-normal">ED6F85</span><br />
                  <span className="font-bold">RGB:</span> <span className="font-normal">237, 111, 133</span><br />
                  <span className="font-bold">CMYK:</span> <span className="font-normal">2, 71, 30, 0</span>
                </p>

              </div>

              <div className="w-2/3">
                <UXWCodePanelHTMLCSS>
                  <div>
{`
<h1 class="uxw-bg-jinx-1">
  Hello World
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-jinx-1 {
  background-color: #ED6F85
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>
              </div>

            </div>


            <div className="flex flex-col w-1/2">

              <div className="box w-full rounded-full uxw-bg-magicians-cloak-2 text-white text-center h-8 pt-1">Alternate shades</div>

              <div className="flex flex-row mx-4 mt-4">

                <div className="flex flex-none w-1/2 items-center justify-center">

                  <div className="box h-20 w-20 rounded-md uxw-bg-jinx-2 ring ring-white ring-offset-2 shadow-lg shadow-inner m-4">
                    <p className="text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                    <p className="text-left text-white pl-2"><span className="font-bold">A </span>PASS</p>
                  </div>

                  <p className="text-left col-span-2 pt-4 pb-4">
                    <span className="font-bold">HEX:</span> <span className="font-normal">F4ACBA</span><br />
                    <span className="font-bold">RGB:</span> <span className="font-normal">244, 172, 186</span><br />
                    <span className="font-bold">CMYK:</span> <span className="font-normal">1, 40, 12, 0</span>
                  </p>

                </div>

                <div className="m-2">

                  <UXWCodePanelHTMLCSS>
                    <div>
{`
<h1 class="uxw-bg-jinx-2">
  Hello World
</h1>
`}
                   </div>
                   <div>
{`
.uxw-bg-jinx-2 {
  background-color: #F4ACBA
}
`}
                   </div>
                  </UXWCodePanelHTMLCSS>

                 </div>

               </div>

               <div className="flex flex-row mx-4 mt-4">

                 <div className="flex flex-none w-1/2 items-center justify-center">

                  <div className="box h-20 w-20 rounded-md uxw-bg-jinx-3 ring ring-white ring-offset-2 shadow-lg shadow-inner m-4">
                    <p className="text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                    <p className="text-left text-white pl-2"><span className="font-bold">A </span>PASS</p>
                  </div>

                  <p className="text-left col-span-2 pt-4 pb-4">
                    <span className="font-bold">HEX:</span> <span className="font-normal">D9556B</span><br />
                    <span className="font-bold">RGB:</span> <span className="font-normal">217, 85, 107</span><br />
                    <span className="font-bold">CMYK:</span> <span className="font-normal">11, 81, 46, 1</span>
                  </p>

                 </div>

                 <div className="m-2">

                    <UXWCodePanelHTMLCSS>
                      <div>
{`
<h1 class="uxw-bg-jinx-3">
  Hello World
</h1>
`}
                      </div>
                      <div>
{`
.uxw-bg-jinx-3 {
  background-color: #D9556B
}
`}
                      </div>
                    </UXWCodePanelHTMLCSS>

                  </div>


            </div>

          </div>

        </div>


        <div className="flex flex-col flex-wrap flex-grow">

          <p className="font-bold font-2xl pb-4">
            Elixir <span className="font-normal">(accent)</span>
          </p>


          <div className="flex flex-row pb-10">

            <div className="flex flex-col w-1/2">

              <div className="box w-2/3 rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1">Base color</div>

              <div className="flex flex-row p-8 mt-4 uxw-bg-steel-1 w-2/3">

                <div className="box h-32 w-32 rounded-lg ring-2 ring-gray-200 ring-offset-4 uxw-bg-elixir-1 shadow-2xl m-4">
                  <p className="text-left text-black pl-4 pt-2"><span className="font-bold">A </span>PASS</p>
                  <p className="text-left text-black pl-4"><span className="text-white font-bold">A </span>FAIL</p>
                </div>

                <p className="text-left px-4 pt-6 pb-4">
                  <span className="font-bold">HEX:</span> <span className="font-normal">E6B161</span><br />
                  <span className="font-bold">RGB:</span> <span className="font-normal">230, 177, 97</span><br />
                  <span className="font-bold">CMYK:</span> <span className="font-normal">10, 31, 72, 0</span>
                </p>

              </div>


              <div className="w-2/3">
                <UXWCodePanelHTMLCSS>
                  <div>
{`
<h1 class="uxw-bg-elixir-1">
  Hello World
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-elixir-1 {
  background-color: #E6B161
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>
              </div>

            </div>


            <div className="flex flex-col w-1/2">

              <div className="box w-full rounded-full uxw-bg-magicians-cloak-2 text-white text-center h-8 pt-1">Alternate shades</div>

              <div className="flex flex-col">

              <div className="flex flex-row mx-4 mt-4">

                <div className="flex flex-none w-1/2 items-center justify-center">

                  <div className="box h-20 w-20 rounded-md uxw-bg-elixir-2 ring ring-white ring-offset-2 shadow-lg shadow-inner m-4">
                    <p className="text-left text-black pl-2 pt-1"><span className=" font-bold">A </span>PASS</p>
                    <p className="text-left text-black pl-2"><span className="text-white font-bold">A </span>FAIL</p>
                  </div>

                 <p className="text-left pt-4 pb-4">
                   <span className="font-bold">HEX:</span> <span className="font-normal">F8D399</span><br />
                   <span className="font-bold">RGB:</span> <span className="font-normal">248, 211, 153</span><br />
                   <span className="font-bold">CMYK:</span> <span className="font-normal">2, 17, 44, 0</span>
                  </p>

                 </div>

                <div className="m-2">
                  <UXWCodePanelHTMLCSS>
                    <div>
{`
<h1 class="uxw-bg-elixir-2">
  Hello World
</h1>
`}
                   </div>
                   <div>
{`
.uxw-bg-elixir-2 {
  background-color: #F8D399
}
`}
                   </div>
                 </UXWCodePanelHTMLCSS>
               </div>

              </div>

            <div className="flex flex-row mx-4">

              <div className="flex flex-none w-1/2 items-center justify-center">

                <div className="box h-20 w-20 rounded-md uxw-bg-elixir-3 ring ring-white ring-offset-2 shadow-lg shadow-inner m-4">
                  <p className="text-left text-white pl-2 pt-1"><span className="text-black font-bold">A </span>FAIL</p>
                  <p className="text-left text-white pl-2"><span className="font-bold">A </span>PASS</p>
                </div>

                <p className="text-left col-span-2 pt-4 pb-4">
                  <span className="font-bold">HEX:</span> <span className="font-normal">CF9748</span><br />
                  <span className="font-bold">RGB:</span> <span className="font-normal">207, 151, 72</span><br />
                  <span className="font-bold">CMYK:</span> <span className="font-normal">19, 42, 84, 1</span>
                </p>

                </div>

                <div className="m-2">
                <UXWCodePanelHTMLCSS>
                  <div>
{`
<h1 class="uxw-bg-elixir-3">
  Hello World
</h1>
`}
                  </div>
                  <div>
{`
.uxw-bg-elixir-3 {
  background-color: #CF9748
}
`}
                  </div>
                </UXWCodePanelHTMLCSS>
              </div>

          </div>

            </div>



          </div>


        </div>



        </div>
</div>

      </UXWSubsection>







    </div>


  )
}
