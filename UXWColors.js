function UXWColors(props) {
  return (
    <div className="container">
      <p className="pb-12 max-w-prose italic">
        <br />
        This page provides a directory of available UX Wizards colors, and then
        color use guidelines to maintain consistency across UX Wizards-branded
        websites.
      </p>

      <UXWSubsection anchor="colors--palette" title="Our Palette">
        <p className="pb-8 mt-4 max-w-prose">
          Our palette consists of neutral, pleasing tones balanced by vivid and
          eccentric colors. This color palette has been carefully chosen to
          provide versatility and function while still providing boundless room
          for expression.
        </p>

        <p className="pb-12 max-w-prose">
          Though our palette is established, we encourage experimentation
          through blending modes and gradients. A good rule of thumb is to start
          with the base color in the left column, and then expand to alternate
          shades as you play around. Have fun... the results could be
          spellbinding!
        </p>
      </UXWSubsection>

      <hr className="pt-8"></hr>

      <UXWSubsection anchor="colors--primary" title="Primary Colors">
        <p className="max-w-prose my-4">
          The flexible and neutral{" "}
          <span className="font-bold">Magician's Cloak</span>,
          <span className="font-bold"> Acid</span>, and{" "}
          <span className="font-bold">Merlin's Beard</span> lead the way.
          They're most often used as foundational elements of your UX Wizards
          designs.
        </p>

        <div className="flex flex-row">
          <div className="flex flex-auto max-w-prose uxw-bg-steel-2 border-black rounded-md shadow-inner items-center justify-center italic py-6 px-12 mt-4 mb-16">
            <p>
              Remember to start with the highlighted box on the left, and then
              supplement with the other colors in the row.
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap flex-grow">
          <div className="flex flex-row pb-16">
            <div className="flex flex-col w-1/3">
              <div className="box rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1 mr-4">
                Magician's Cloak
              </div>

              <div className="flex flex-col uxw-bg-steel-1 rounded-lg shadow-inner mt-4 ml-4 mr-8">
                <div className="flex flex-col p-8 items-center justify-start">
                  <div className="box h-32 w-64 rounded-lg border-2 border-gray-300 uxw-bg-magicians-cloak-1 shadow-xl m-4 z-1">
                    <p className="z-2 text-left text-white pl-8 pt-8">
                      <span className="text-black font-bold">A </span>FAIL
                    </p>
                    <p className="z-2 text-left text-white pl-8">
                      <span className="text-white font-bold">A </span>PASS
                    </p>
                  </div>

                  <p className="justify-start text-left -ml-4 pt-6 pb-4">
                    <span className="font-bold">Global Token: </span>
                    <span className="font-normal">
                      magicianscloak-1
                    </span>
                    <br></br>
                    <span className="font-bold">HEX:</span>{" "}
                    <span className="font-normal"># 152145</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-2/3">
              <div className="flex flex-row pt-10 pb-4 mt-4 ml-4 mr-8">
                <div className="flex flex-col mt-6 ml-5 mr-4">
                  <div className="flex flex-col items-center justify-left pl-16">
                    <div className="box h-32 w-64 rounded-md uxw-bg-magicians-cloak-2 border-2 border-gray-300 m-4">
                      <p className="z-2 text-left text-white pl-8 pt-8">
                        <span className="text-black font-bold">A </span>FAIL
                      </p>
                      <p className="z-2 text-left text-white pl-8">
                        <span className="text-white font-bold">A </span>PASS
                      </p>
                    </div>

                    <p className="text-left mt-1 -ml-4 pt-6 pb-4">
                      <span className="font-bold">Global Token: </span>
                      <span className="font-normal">
                        magicianscloak-2
                      </span>
                      <br />
                      <span className="font-bold">HEX:</span>{" "}
                      <span className="font-normal"># 4F66AD</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col mt-6 ml-5 mr-4">
                  <div className="flex flex-col items-center justify-left pl-16">
                    <div className="box h-32 w-64 rounded-md uxw-bg-magicians-cloak-3 border-2 border-gray-300 m-4">
                      <p className="z-2 text-left text-white pl-8 pt-8">
                        <span className="text-black font-bold">A </span>FAIL
                      </p>
                      <p className="z-2 text-left text-white pl-8">
                        <span className="text-white font-bold">A </span>PASS
                      </p>
                    </div>

                    <p className="text-left pt-6 pb-4 mt-1 -ml-4">
                      <span className="font-bold">Global Token: </span>
                      <span className="font-normal">
                        magicianscloak-3
                      </span>
                      <br />
                      <span className="font-bold">HEX:</span>{" "}
                      <span className="font-normal"># 2B3D72</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-wrap flex-grow">
            <div className="flex flex-row pb-16">
              <div className="flex flex-col w-1/3">
                <div className="box rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1 mr-4">
                  Acid
                </div>

                <div className="flex flex-col uxw-bg-steel-1 rounded-lg shadow-inner mt-4 ml-4 mr-8">
                  <div className="flex flex-col p-8 items-center justify-start">
                    <div className="box h-32 w-64 rounded-lg border-2 border-gray-300 uxw-bg-acid-1 shadow-xl m-4 z-1">
                      <p className="text-left text-white pl-8 pt-8">
                        <span className="text-black font-bold">A </span>FAIL
                      </p>
                      <p className="text-left text-white pl-8">
                        <span className="text-white font-bold">A </span>PASS
                      </p>
                    </div>

                    <p className="justify-start text-left -ml-24 pt-6 pb-4">
                      <span className="font-bold">Global Token: </span>
                      <span className="font-normal">acid-1</span>
                      <br />
                      <span className="font-bold">HEX:</span>{" "}
                      <span className="font-normal"># 6331FD</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row w-2/3">
                <div className="flex flex-row pt-10 pb-4 mt-4 ml-4 mr-8">
                  <div className="flex flex-col mt-6 ml-5 mr-4">
                    <div className="flex flex-col items-center justify-start pl-16">
                      <div className="box h-32 w-64 rounded-md uxw-bg-acid-2 border-2 border-gray-300 m-4 z-1">
                        <p className="z-2 text-left text-black pl-8 pt-8">
                          <span className="text-black font-bold">A </span>PASS
                        </p>
                        <p className="z-2 text-left text-black pl-8">
                          <span className="text-white font-bold">A </span>FAIL
                        </p>
                      </div>

                      <p className="justify-start text-left -ml-24 pt-6 pb-4">
                        <span className="font-bold">Global Token: </span>
                        <span className="font-normal">acid-2</span>
                        <br />
                        <span className="font-bold">HEX:</span>{" "}
                        <span className="font-normal"># D8CBFF</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col mt-5 ml-5 mr-4">
                    <div className="flex flex-col items-center justify-start pl-16">
                      <div className="box h-32 w-64 rounded-md uxw-bg-acid-3 border-2 border-gray-300 m-4 z-1">
                        <p className="z-2 text-left text-white pl-8 pt-8">
                          <span className="text-black font-bold">A </span>FAIL
                        </p>
                        <p className="z-2 text-left text-white pl-8">
                          <span className="font-bold">A </span>PASS
                        </p>
                      </div>

                      <p className="justify-start text-left -ml-24 pt-6 pb-4">
                        <span className="font-bold">Global Token: </span>
                        <span className="font-normal">acid-3</span>
                        <br />
                        <span className="font-bold">HEX:</span>{" "}
                        <span className="font-normal"># 3F18B4</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-wrap flex-grow">
              <div className="flex flex-row pb-10">
                <div className="flex flex-col w-1/3">
                  <div className="box rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1 mr-4">
                    Merlin's Beard
                  </div>

                  <div className="flex flex-col uxw-bg-steel-1 shadow-inner rounded-lg mt-4 ml-4 mr-8 mt-4">
                    <div className="flex flex-col p-8 items-center justify-center">
                      <div className="box h-32 w-64 rounded-lg uxw-bg-merlins-beard-1 shadow-lg border-2 border-gray-300 pb-4 mt-4 ml-8 mr-8 z-1">
                        <p className="z-2 text-left pl-8 pt-8">
                          <span className="text-black font-bold">A </span>PASS
                        </p>
                        <p className="z-2 text-left text-black pl-8">
                          <span className="text-white font-bold">A </span>FAIL
                        </p>
                      </div>

                      <p className="text-left justify-start -ml-8 pt-10 pb-4">
                        <span className="font-bold">Global Token: </span>
                        <span className="font-normal">
                          merlinsbeard-1
                        </span>
                        <br />
                        <span className="font-bold">HEX:</span>{" "}
                        <span className="font-normal"># FFFFFF</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row pt-12 mt-1 pl-4 w-2/3">
                  <div className="flex flex-row">
                    <div className="flex flex-col mt-7 ml-5 mr-4">
                      <div className="flex flex-col items-center justify-start pl-16">
                        <div className="box h-32 w-64 rounded-md uxw-bg-merlins-beard-2 border-2 border-gray-300 m-4 z-1">
                          <p className="z-2 text-left pl-8 pt-8">
                            <span className="text-black font-bold">A </span>PASS
                          </p>
                          <p className="z-2 text-left text-black pl-8">
                            <span className="text-white font-bold">A </span>FAIL
                          </p>
                        </div>

                        <p className="text-left -ml-8 pt-6 pb-4">
                          <span className="font-bold">Global Token: </span>{" "}
                          
                          <span className="font-normal">
                            merlinsbeard-2
                          </span>
                          <br />
                          <span className="font-bold">HEX:</span>{" "}
                          <span className="font-normal"># E6E6E6</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row mt-7 ml-5 mr-4">
                      <div className="flex flex-col items-center justify-start pl-16">
                        <div className="box h-32 w-64 rounded-md uxw-bg-merlins-beard-3 border-2 border-gray-300 m-4">
                          <p className="z-2 text-left pl-8 pt-8">
                            <span className="text-black font-bold">A </span>PASS
                          </p>
                          <p className="z-2 text-left text-black pl-8">
                            <span className="text-white font-bold">A </span>FAIL
                          </p>
                        </div>

                        <p className="text-left -ml-8 pt-6 pb-4">
                          <span className="font-bold">Global Token: </span>{" "}
                          
                          <span className="font-normal">
                            merlinsbeard-3
                          </span>
                          <br />
                          <span className="font-bold">HEX:</span>{" "}
                          <span className="font-normal"># C9CACB</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row mt-7 ml-5 mr-4">
                      <div className="flex flex-col items-center justify-start pl-16">
                        <div className="box h-32 w-64 rounded-md uxw-bg-merlins-beard-4 border-2 border-gray-300 m-4">
                          <p className="z-2 text-left text-white pl-8 pt-8">
                            <span className="text-black font-bold">A </span>FAIL
                          </p>
                          <p className="z-2 text-left text-white pl-8">
                            <span className="text-white font-bold">A </span>PASS
                          </p>
                        </div>

                        <p className="text-left -ml-8 pt-6 pb-4">
                          <span className="font-bold">Global Token: </span>{" "}
                          
                          <span className="font-normal">
                            merlinsbeard-4
                          </span>
                          <br />
                          <span className="font-bold">HEX:</span>{" "}
                          <span className="font-normal"># 737887</span>
                        </p>
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

      <UXWSubsection anchor="colors--secondary" title="Secondary Colors">
        <div className="flex flex-auto w-full bg-transparent">
          <p className="pb-16 mt-4 max-w-prose">
            Use <span className="font-bold">Steel</span> and{" "}
            <span className="font-bold">Mana</span> as supporting tones to help
            build environments in your UXW content.
          </p>
        </div>

        <div className="flex flex-col flex-wrap flex-grow">
          <div className="flex flex-row pb-10">
            <div className="flex flex-col w-1/3">
              <div className="box rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1 mr-4">
                Steel
              </div>

              <div className="flex flex-col uxw-bg-steel-1 shadow-inner rounded-lg mt-4 ml-3 mr-8 mt-4">
                <div className="flex flex-col p-8 items-center justify-center">
                  <div className="box h-32 w-64 rounded-lg border-2 border-gray-400 uxw-bg-steel-1 shadow-xl m-4 z-1">
                    <p className="text-left text-black pl-8 pt-8">
                      <span className=" font-bold">A </span>PASS
                    </p>
                    <p className="text-left text-black pl-8">
                      <span className="text-white font-bold">A </span>FAIL
                    </p>
                  </div>

                  <p className="text-left -ml-24 pl-2 pt-6 pb-4">
                    <span className="font-bold">Global Token: </span> 
                    <span className="font-normal">steel-1</span>
                    <br />
                    <span className="font-bold">HEX:</span>{" "}
                    <span className="font-normal"># E0E6FD</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row pt-16 pl-4 w-2/3">
              <div className="flex flex-row pl-1 m-4">
                <div className="flex flex-col items-center justify-left pl-16">
                  <div className="box h-32 w-64 rounded-md uxw-bg-steel-2 border-2 border-gray-300 m-4">
                    <p className="text-left text-black pl-8 pt-8">
                      <span className=" font-bold">A </span>PASS
                    </p>
                    <p className="text-left text-black pl-8">
                      <span className="text-white font-bold">A </span>FAIL
                    </p>
                  </div>

                  <p className="text-left justify-start -ml-24 pl-2 pt-6 pb-4">
                    <span className="font-bold">Global Token: </span>
                    <span className="font-normal">steel-2</span>
                    <br />
                    <span className="font-bold">HEX:</span>{" "}
                    <span className="font-normal"># F7F9FF</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col mt-4 ml-4 mr-4">
                <div className="flex flex-col items-center justify-start pl-16">
                  <div className="box h-32 w-64 rounded-md uxw-bg-steel-3 border-2 border-gray-300 m-4">
                    <p className="text-left text-black pl-8 pt-8">
                      <span className=" font-bold">A </span>PASS
                    </p>
                    <p className="text-left text-black pl-8">
                      <span className="text-white font-bold">A </span>FAIL
                    </p>
                  </div>

                  <p className="text-left justify-start -ml-24 pl-2 pt-6 pb-4">
                    <span className="font-bold">Global Token: </span>
                    <span className="font-normal">steel-3</span>
                    <br />
                    <span className="font-bold">HEX:</span>{" "}
                    <span className="font-normal"># CCD5F5</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col m-4">
                <div className="flex flex-col items-center justify-start pl-16 mr-12">
                  <div className="box h-32 w-64 rounded-md uxw-bg-merlinsbeard-1  m-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap flex-grow">

          <div className="flex flex-row pb-10">
            <div className="flex flex-col w-1/3">
              <div className="box rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1 mr-4">
                Mana
              </div>

              <div className="flex flex-col uxw-bg-steel-1 shadow-inner rounded-lg mt-4 ml-4 mr-8 mt-4">
                <div className="flex flex-col p-8 items-center justify-center">
                  <div className="box h-32 w-64 rounded-lg border-2 border-gray-300 uxw-bg-mana-1 shadow-xl m-4">
                    <p className="text-left text-black pl-8 pt-8">
                      <span className=" font-bold">A </span>FAIL
                    </p>
                    <p className="text-left text-white pl-8">
                      <span className="text-white font-bold">A </span>PASS
                    </p>
                  </div>

                  <p className="text-left justify-start -ml-24 pl-2 pt-6 pb-4">
                    <span className="font-bold">Global Token: </span> 
                    <span className="font-normal">mana-1</span>
                    <br />
                    <span className="font-bold">HEX:</span>{" "}
                    <span className="font-normal"># 00BBD6</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row pl-4 mt-12 pt-1 w-2/3">

              <div className="flex flex-row">
                <div className="flex flex-col mt-7 ml-5 mr-4">
                  <div className="flex flex-col items-center justify-start pl-16">
                    <div className="box h-32 w-64 rounded-md uxw-bg-mana-2 border-2 border-gray-300 m-4">
                      <p className="text-left text-white pl-8 pt-8">
                        <span className="text-black font-bold">A </span>FAIL
                      </p>
                      <p className="text-left text-white pl-8">
                        <span className="font-bold">A </span>PASS
                      </p>
                    </div>

                    <p className="text-left justify-start -ml-24 pl-2 pt-6 pb-4">
                      <span className="font-bold">Global Token: </span> 
                      <span className="font-normal">mana-2</span>
                      <br />
                      <span className="font-bold">HEX:</span>{" "}
                      <span className="font-normal"># 24DDFD</span>
                    </p>
                  </div>

                </div>

                <div className="flex flex-col mt-7 ml-4 mr-4">
                  <div className="flex flex-col items-center justify-start pl-16">
                    <div className="box h-32 w-64 rounded-md uxw-bg-mana-3 border-2 border-gray-300 m-4">
                      <p className="text-left text-white pl-8 pt-8">
                        <span className="text-black font-bold">A </span>FAIL
                      </p>
                      <p className="text-left text-white pl-8">
                        <span className="text-white font-bold">A </span>PASS
                      </p>
                    </div>

                    <p className="text-left justify-start -ml-24 pl-2 pt-6 pb-4">
                      <span className="font-bold">Global Token: </span> 
                      <span className="font-normal">mana-3</span>
                      <br />
                      <span className="font-bold">HEX:</span>{" "}
                      <span className="font-normal"># 299BB0</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col m-4">
                <div className="flex flex-col items-center justify-start pl-16 mr-12">
                  <div className="box h-32 w-64 rounded-md uxw-bg-merlinsbeard-1  m-4"></div>
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
      </UXWSubsection>

      <hr className="pt-4 pb-8"></hr>

      <UXWSubsection anchor="colors--accent" title="Accent Colors">
        <div className="max-w-prose bg-transparent">
          <p className="pb-12 mt-4">
            <span className="font-bold">Jinx</span> and{" "}
            <span className="font-bold">Elixir</span> should be used with
            restraint and finesse. Think of these colors as ways to draw
            attention to specific things on purpose.
          </p>
        </div>

        <div className="flex flex-col flex-wrap flex-grow">

          <div className="flex flex-row pb-10">
            <div className="flex flex-col w-1/3">
              <div className="box rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1 mr-4">
                Jinx
              </div>

              <div className="flex flex-col uxw-bg-steel-1 shadow-inner rounded-lg mt-4 ml-4 mr-8 mt-4">
                <div className="flex flex-col p-8 items-center justify-start">
                  <div className="box h-32 w-64 rounded-lg rborder-2 border-gray-300 uxw-bg-jinx-1 shadow-xl m-4">
                    <p className="text-left text-white pl-8 pt-8">
                      <span className="text-black font-bold">A </span>FAIL
                    </p>
                    <p className="text-left text-white pl-8">
                      <span className="font-bold">A </span>PASS
                    </p>
                  </div>

                  <p className="text-left justify-start -ml-28 pl-2 pt-6 pb-4">
                    <span className="font-bold">Global Token: </span> 
                    <span className="font-normal">jinx-1</span>
                    <br />
                    <span className="font-bold">HEX:</span>{" "}
                    <span className="font-normal"># FF6584</span>
                  </p>
                </div>

              </div>
            </div>

            <div className="flex flex-row pl-4 mt-12 pt-1 w-2/3">

              <div className="flex flex-col mt-7 ml-5 mr-4">
                <div className="flex flex-col items-center justify-start pl-16">
                  <div className="box h-32 w-64 rounded-md uxw-bg-jinx-2 border-2 border-gray-300 m-4">
                    <p className="text-left text-white pl-8 pt-8">
                      <span className="text-black font-bold">A </span>FAIL
                    </p>
                    <p className="text-left text-white pl-8">
                      <span className="font-bold">A </span>PASS
                    </p>
                  </div>

                  <p className="text-left justify-start -ml-28 pl-2 pt-6 pb-4">
                    <span className="font-bold">Global Token: </span> 
                    <span className="font-normal">jinx-2</span>
                    <br />
                    <span className="font-bold">HEX:</span>{" "}
                    <span className="font-normal"># FFA8BA</span>
                  </p>
                </div>

              </div>

              <div className="flex flex-col mt-7 ml-4 mr-4">
                <div className="flex flex-col items-center justify-start pl-16">
                  <div className="box h-32 w-64 rounded-md uxw-bg-jinx-3 border-2 border-gray-300 m-4">
                    <p className="text-left text-white pl-8 pt-8">
                      <span className="text-black font-bold">A </span>FAIL
                    </p>
                    <p className="text-left text-white pl-8">
                      <span className="font-bold">A </span>PASS
                    </p>
                  </div>

                  <p className="text-left justify-start -ml-28 pl-2 pt-6 pb-4">
                    <span className="font-bold">Global Token: </span> 
                    <span className="font-normal">jinx-3</span>
                    <br />
                    <span className="font-bold">HEX:</span>{" "}
                    <span className="font-normal"># EA4869</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col m-4">
                <div className="flex flex-col items-center justify-start pl-16 mr-12">
                  <div className="box h-32 w-64 rounded-md uxw-bg-merlinsbeard-1  m-4"></div>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-col flex-wrap flex-grow">
            

            <div className="flex flex-row pb-10">
              <div className="flex flex-col w-1/3">
                <div className="box rounded-full uxw-bg-magicians-cloak-1 text-white text-center h-8 pt-1 mr-4">
                  Elixir
                </div>

                <div className="flex flex-col uxw-bg-steel-1 shadow-inner rounded-lg mt-4 ml-4 mr-8 mt-4">
                  <div className="flex flex-col p-8 items-center justify-center">
                    <div className="box h-32 w-64 rounded-lg border-2 border-gray-300 uxw-bg-elixir-1 shadow-xl m-4">
                      <p className="text-left text-black pl-8 pt-8">
                        <span className="font-bold">A </span>PASS
                      </p>
                      <p className="text-left text-black pl-8">
                        <span className="text-white font-bold">A </span>FAIL
                      </p>
                    </div>

                    <p className="text-left justify-start -ml-24 pl-2 pt-6 pb-4">
                      <span className="font-bold">Global Token: </span> 
                      <span className="font-normal">elixir-1</span>
                      <br />
                      <span className="font-bold">HEX:</span>{" "}
                      <span className="font-normal"># F0B052</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row pl-4 mt-12 pt-1 w-2/3">

                <div className="flex flex-row">
                  <div className="flex flex-col mt-7 ml-5 mr-4">
                    <div className="flex flex-col items-center justify-start pl-16">
                      <div className="box h-32 w-64 rounded-md uxw-bg-elixir-2 border-2 border-gray-300 m-4">
                        <p className="text-left text-black pl-8 pt-8">
                          <span className=" font-bold">A </span>PASS
                        </p>
                        <p className="text-left text-black pl-8">
                          <span className="text-white font-bold">A </span>FAIL
                        </p>
                      </div>

                      <p className="text-left justify-start -ml-24 pl-2 pt-6 pb-4">
                        <span className="font-bold">Global Token: </span> 
                        <span className="font-normal">elixir-2</span>
                        <br />
                        <span className="font-bold">HEX:</span>{" "}
                        <span className="font-normal"># FFD190</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col mt-7 ml-4 mr-4">
                    <div className="flex flex-col items-center justify-start pl-16">
                      <div className="box h-32 w-64 rounded-md uxw-bg-elixir-3 border-2 border-gray-300 m-4">
                        <p className="text-left text-white pl-8 pt-8">
                          <span className="text-black font-bold">A </span>FAIL
                        </p>
                        <p className="text-left text-white pl-8">
                          <span className="font-bold">A </span>PASS
                        </p>
                      </div>

                      <p className="text-left justify-start -ml-24 pl-2 pt-6 pb-4">
                        <span className="font-bold">Global Token: </span>
                        <span className="font-normal">elixir-3</span>
                        <br />
                        <span className="font-bold">HEX:</span>{" "}
                        <span className="font-normal"># D99432</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col m-4">
                <div className="flex flex-col items-center justify-start pl-16 mr-12">
                  <div className="box h-32 w-64 rounded-md uxw-bg-merlinsbeard-1  m-4"></div>
                </div>
              </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </UXWSubsection>

      <hr className="pt-4 pb-8"></hr>

      <UXWSubsection anchor="colors--usage" title="Use Guidelines">

        

        <p className="mt-8 pb-4">
        <a onClick={() => document.getElementById("guidelines--text").scrollIntoView({behavior: 'smooth', block: 'center'})}>Text</a> | <a onClick={() => document.getElementById("guidelines--buttons").scrollIntoView({behavior: 'smooth', block: 'center'})}>Buttons</a> | <a onClick={() => document.getElementById("guidelines--backgrounds").scrollIntoView({behavior: 'smooth', block: 'center'})}>Backgrounds</a> | <a onClick={() => document.getElementById("guidelines--borders").scrollIntoView({behavior: 'smooth', block: 'center'})}>Borders and lines</a> | <a onClick={() => document.getElementById("guidelines--accents").scrollIntoView({behavior: 'smooth', block: 'center'})}>Accents</a> | <a onClick={() => document.getElementById("guidelines--semantics").scrollIntoView({behavior: 'smooth', block: 'center'})}>Error and success</a> | <a onClick={() => document.getElementById("colors--dodont").scrollIntoView({behavior: 'smooth', block: 'center'})}>Do/Don't</a>
        </p>

      <div className="flex flex-col max-w-prose uxw-bg-steel-2 border-black rounded-md shadow-inner italic py-6 px-12 mt-8 mb-16">
          
        <p className="text-left">
            "[Constraints] provide the guardrails that keep your team grounded and aligned. Creativity thrives in constraints."</p>
          <br />
          <p className="text-right">Gothelf and Sieden, <span className="underline">Lean UX</span></p>
        
      </div>

      <div className="max-w-prose bg-transparent">

        <p className="pb-8 mt-4">
        Use these color guidelines to ground the interactive elements on our UX Wizards branded webpages in a consistent look and feel. With these basic guardrails in place, there is lots of room for creative exploration!
        </p>

        <p className="pb-12">These guidelines are intended to streamline choices when building UX Wizards webpage elements. For graphics, you are encouraged to use UX Wizards colors according to your eye and the general guidelines provided in the preceeding sections.
        </p>

      </div>

      

      <UXWSubsection anchor="guidelines--accessibility" title="Accessibility">

      <div className="max-w-prose bg-transparent">

        <p className="pb-12 mt-4">It’s important that users can see the content in our UX Wizards pages. Ideally, your color contrast ratio should be at least 7.2:1. At a minimum, aim for 6:1. You can always use the <a href="https://webaim.org/resources/contrastchecker/" title="Go to WebAIM's contrast checker">WebAIM contrast checker</a> to check the contrast ratios in your designs.
        </p>

      </div>

      
      </UXWSubsection>

      <UXWSubsection anchor="guidelines--inaction" title="Use Guidelines in Action">

<div className="mt-4 pb-16">
  <img src="assets/guidelines-inaction.svg" alt="A sample UX Wizards web page" ></img>
  </div>


      </UXWSubsection>

      <UXWSubsection anchor="guidelines--text" title="Text">

<a name="text"></a>
      <div className="max-w-prose bg-transparent">
      <p className="pb-12 mt-4">
      Text is a way to communicate information to visitors. We always want to make sure that text is visible, legible, and clear. Please also refer to the <a href="https://designsystem.uxwizards.org/#/typography" title="Go to UXW Typography">Typography</a> and <a href="https://designsystem.uxwizards.org/#/about" title="Go to UXW Who We Are">Who We Are</a> sections for more guidance.
      </p>
      </div>


      <div className="flex flex-row mb-16">

        <div className="flex flex-col w-1/6 justify-start">
          <p className="font-bold mb-4">Main text</p>
          <div className="box h-16 w-32 rounded-md uxw-bg-magicians-cloak-1 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">magicianscloak-1<br />
          HEX: # 152145</p>
        </div>

        <div className="flex flex-col w-1/6 justify-start">
          <p className="font-bold mb-4">Link text</p>
          <div className="box h-16 w-32 rounded-md uxw-bg-acid-1 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">acid-1<br />
          HEX: # 6331FD</p>
        </div>

        <div className="flex flex-col w-1/6 justify-start">
          <p className="font-bold mb-4">Hovered link</p>
          <div className="box h-16 w-32 rounded-md uxw-bg-acid-3 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">acid-3<br />
          HEX: # 3F18B4</p>
        </div>

        <div className="flex flex-col w-1/6 justify-start">
          <p className="font-bold mb-4">Active link (on click)</p>
          <div className="box h-16 w-32 rounded-md uxw-bg-mana-3 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">mana-3<br />
          HEX: # 299BB0</p>
        </div>

        </div>

        <div className="flex flex-row">

        <div className="flex flex-col w-1/6 justify-start">
          <p className="font-bold mb-4">Button text</p>
          <div className="box h-16 w-32 rounded-md uxw-bg-merlins-beard-1 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">merlinsbeard-1<br />
          HEX: # FFFFFF</p>
        </div>

        <div className="flex flex-col w-1/6 justify-start">
          <p className="font-bold mb-4">Disabled button text</p>
          <div className="box h-16 w-32 rounded-md uxw-bg-merlins-beard-4 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">merlinsbeard-4<br />
          HEX: # 737887</p>
        </div>

        <div className="flex flex-col w-1/6 justify-start pb-16">
          <p className="font-bold mb-4">Banner text</p>
          <div className="box h-16 w-32 rounded-md uxw-bg-merlins-beard-1 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">merlinsbeard-1<br />
          HEX: # FFFFFF</p>
        </div>
         
      

      </div>
        </UXWSubsection>

        <UXWSubsection anchor="guidelines--buttons" title="Buttons">

<div className="mt-4 max-w-prose bg-transparent">
<p className="pb-12 mt-4">Buttons communicate action potential. There are three states for buttons: standard, hovered, and disabled.</p>

</div>

<div className="flex flex-row mb-16">

        <div className="flex flex-col w-1/6 justify-start">
          <p className="font-bold mb-4">Button (gradient to r)</p>
          <div className="box h-16 w-32 rounded-md from-indigo-600 to-indigo-900 bg-gradient-to-r border-2 border-gray-300 mb-4"></div>
          <p className="text-left"><span className="font-bold">From: </span>acid-1<br />
          HEX: # 6331FD<br /><br />
          <span className="font-bold">To: </span>acid-3<br />
          HEX: # 3F18B4
          </p>
        </div>

        <div className="flex flex-col w-1/6 justify-start">
          <p className="font-bold mb-4">Hovered button</p>
          <div className="box h-16 w-32 rounded-md uxw-bg-acid-3 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">acid-3<br />
          HEX: # 3F18B4</p>
        </div>

        <div className="flex flex-col w-1/6 justify-start">
          <p className="font-bold mb-4">Disabled button</p>
          <div className="box h-16 w-32 rounded-md uxw-bg-merlins-beard-3 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">merlinsbeard-3<br />
          HEX: # C9CACB</p>
        </div>

        <div className="flex flex-col w-1/6 justify-start">
          <p className="font-bold mb-4">Button text</p>
          <div className="box h-16 w-32 rounded-md uxw-bg-merlins-beard-1 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">merlinsbeard-1<br />
          HEX: # FFFFFF</p>
        </div>

        <div className="flex flex-col w-1/6 justify-start">
          <p className="font-bold mb-4">Disabled button text</p>
          <div className="box h-16 w-32 rounded-md uxw-bg-merlins-beard-4 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">merlinsbeard-4<br />
          HEX: # 737887</p>
        </div>

        
  </div>
  </UXWSubsection>

  <UXWSubsection anchor="guidelines--backgrounds" title="Backgrounds">

<div className="mt-4 max-w-prose bg-transparent">
<p className="pb-12 mt-4">These colors provide the airy, magical background that UX Wizards content floats on. Use them to create spaces, areas, and gradients that delight visitors and communicate grouping for different elements.
</p>
</div>

<div className="flex flex-row mb-16">

        <div className="flex flex-col w-1/6 justify-start">
          <div className="box h-16 w-32 rounded-md uxw-bg-merlins-beard-1 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">merlinsbeard-1<br />
          HEX: # FFFFFF</p>
        </div>

        <div className="flex flex-col w-1/6 justify-start">
          <div className="box h-16 w-32 rounded-md uxw-bg-steel-2 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">steel-2<br />
          HEX: # F7F9FF</p>
        </div>

        <div className="flex flex-col w-1/6 justify-start">
          <div className="box h-16 w-32 rounded-md uxw-bg-steel-1 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">steel-1<br />
          HEX: # E0E6FD</p>
        </div>

        <div className="flex flex-col w-1/6 justify-start">
          <div className="box h-16 w-32 rounded-md uxw-bg-acid-2 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">acid-2<br />
          HEX: # D8CBFF</p>
        </div>

  </div>

  <div className="mt-4 max-w-prose bg-transparent">
<p className="pb-12 mt-4">If you choose to use a top banner, like the one on the UX Wizards Design system, use Magician’s Cloak for the background.
</p>
</div>

<div className="flex flex-col w-1/6 justify-start mb-16">
          <div className="box h-16 w-32 rounded-md uxw-bg-magicians-cloak-1 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">magicianscloak-1<br />
          HEX: # 152145</p>
        </div>

  </UXWSubsection>

  <UXWSubsection anchor="guidelines--borders" title="Borders and lines">

<div className="mt-4 max-w-prose bg-transparent">
<p className="pb-12 mt-4">When an element needs to be outlined to be seen, or for dividers and spacers on lists, UX Wizards sites use a singular color to maintain consistency.
</p>
</div>

<div className="flex flex-col w-1/6 justify-start mb-16">
          <div className="box h-16 w-32 rounded-md uxw-bg-merlins-beard-3 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">merlinsbeard-3<br />
          HEX: # C9CACB</p>
        </div>

</UXWSubsection>

<UXWSubsection anchor="guidelines--accents" title="Accents">

<div className="mt-4 max-w-prose bg-transparent pr-12">
<p className="pb-12 mt-4">Use these colors to draw attention to highlighted elements on the page, such as selected tabs. 
</p>
</div>

<div className="flex flex-row mb-16">

        <div className="flex flex-col w-1/6 justify-start">
          <div className="box h-16 w-32 rounded-md uxw-bg-jinx-1 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">jinx-1<br />
          HEX: # FF6584</p>
        </div>

        <div className="flex flex-col w-1/6 justify-start">
          <div className="box h-16 w-32 rounded-md uxw-bg-elixir-1 border-2 border-gray-300 mb-4"></div>
          <p className="text-left">elixir-1<br />
          HEX: # F0B052</p>
        </div>

        </div>



</UXWSubsection>
       

<UXWSubsection anchor="guidelines--semantics" title="Success and error">

<div className="mt-4 max-w-prose bg-transparent">
<p className="pb-12 mt-4">These colors communicate success and error states, and are likely to be found in form fields. 
</p>
</div>

<div className="flex flex-row mb-16">

        <div className="flex flex-col w-1/6 justify-start">
          <div className="box h-16 w-32 rounded-md uxw-bg-success border-2 border-gray-300 mb-4"></div>
          <p className="text-left">success-green<br />
          HEX: # 1CCB6C</p>
        </div>

        <div className="flex flex-col w-1/6 justify-start">
          <div className="box h-16 w-32 rounded-md uxw-bg-error border-2 border-gray-300 mb-4"></div>
          <p className="text-left">error-red<br />
          HEX: # EA3434</p>
        </div>

        </div>

</UXWSubsection>

<UXWSubsection anchor="colors--dodont" title="Do and Don'ts">

      <div className="flex flex-col max-w-prose uxw-bg-steel-2 border-black rounded-md shadow-inner italic py-6 px-12 mt-8 mb-12">
          
        <p className="italic">
        Remember to aim for 7.2:1 as your standard for accessible color combinations. To test your colors, visit <a href="https://webaim.org/resources/contrastchecker/" title="Go to WebAIM's contrast checker">WebAIM</a>.
            </p>
          
        
      </div>

      <div className="max-w-prose bg-transparent">

        <p className="pb-16">
        Use these color guidelines to ground the interactive elements on our UX Wizards branded webpages in a consistent look and feel. With these basic guardrails in place, there is lots of room for creative exploration!
        </p>

        </div>

        

        <div className="flex flex-row mb-16">

        <div className="flex flex-col w-1/4 items-center">
        <div className="box px-4 align-middle rounded-full uxw-bg-error text-center mt-2 font-extrabold text-white w-1/4 mb-4 mr-40">✗ Don't</div>
          <div className="box h-16 w-32 pt-4 rounded-md uxw-bg-acid-1 border-2 border-gray-300 mb-4">
            <p className="text-magicianscloak-1 text-center font-bold">Button</p>
          </div>

          <div className="flex-row">
          <p className="text-magicianscloak-1"> use any other colors for button text</p>
        </div>
        </div>
        

        <div className="flex flex-col w-1/4 items-center">
        <div className="box px-4 align-middle rounded-full uxw-bg-success text-center mt-2 font-extrabold text-white w-1/4 mb-4 mr-40">✓ Do</div>
          <div className="box h-16 w-32 pt-4 rounded-md uxw-bg-acid-1 border-2 border-gray-300 mb-4">
            <p className="text-white text-center font-bold">Button</p>
          </div>
          <p className="text-left -ml-20">use white text on buttons</p>
        </div>

        </div>

        <div className="flex flex-row mb-20">

<div className="flex flex-col w-1/4 items-center">
<div className="box px-4 align-middle rounded-full uxw-bg-error text-center mt-2 font-extrabold text-white w-1/4 mb-4 mr-40">✗ Don't</div>
  <div className="box h-16 w-32 pt-4 z-1 rounded-md uxw-bg-jinx-1 border-2 border-gray-300 relative mb-4">
    <div className="box w-12 h-4 z-2 uxw-bg-steel-2 rounded-md absolute bottom-2 right-2"></div>
  </div>
  <p className="text-left pl-2">use an accent as a background color</p>
</div>

<div className="flex flex-col w-1/4 items-center">
<div className="box px-4 align-middle rounded-full uxw-bg-success text-center mt-2 font-extrabold text-white w-1/4 mb-4 mr-40">✓ Do</div>
  <div className="box h-16 w-32 pt-4 z-1 rounded-md uxw-bg-steel-2 border-2 border-gray-300 relative mb-4">
    <div className="box w-12 h-4 z-2 uxw-bg-jinx-1 rounded-md absolute bottom-2 right-2"></div>
  </div>
  <p className="text-left -ml-12 -pl-2">use an accent as a highlight</p>
</div>

</div>

        <div className="flex flex-row mb-20">

        <div className="flex flex-col w-1/4 items-center">
        <div className="box px-4 align-middle rounded-full uxw-bg-error text-center mt-2 font-extrabold text-white w-1/4 mb-4 mr-40">✗ Don't</div>
          <div className="box h-16 w-32 pt-4 rounded-md uxw-bg-acid-1 border-2 border-gray-300 mb-4">
            <p className="text-center font-bold text-white">Join <span className="booty">us!</span></p>
          </div>
          <p className="text-left -ml-8 mt-2">combine text colors on buttons</p>
        </div>

        <div className="flex flex-col w-1/4 items-center">
        <div className="box px-4 align-middle rounded-full uxw-bg-success text-center mt-2 font-extrabold text-white w-1/4 mb-4 mr-40">✓ Do</div>
          <div className="box h-16 w-32 pt-4 rounded-md uxw-bg-merlins-beard-3 border-2 border-gray-300 mb-4">
            <p className="text-gray-700 text-center font-bold">Button</p>
          </div>
          <p className="text-left -ml-10">use greys for disabled states</p>
        </div>

        <div className="flex flex-col w-1/4 items-center -ml-14">
        <div className="box px-4 align-middle rounded-full uxw-bg-success text-center mt-2 font-extrabold text-white w-1/4 mb-4 mr-40">✓ Do</div>
          <div className="box h-16 w-32 pt-4 rounded-md uxw-bg-steel-2 border-2 border-gray-300 mb-4">
            <p className="text-magicianscloak-1 text-center font-bold">UX Wizards</p>
          </div>
          <p className="text-left pl-12 ml-2">make sure there is enough contrast for text</p>
        </div>

        </div>



        <div className="flex flex-row mb-16">

<div className="flex flex-col w-1/4 items-center">
<div className="box px-4 align-middle rounded-full uxw-bg-error text-center mt-2 font-extrabold text-white w-1/4 mb-4 mr-40">✗ Don't</div>
 <div className="box h-16 w-32 pt-4 z-1 rounded-md uxw-bg-mana-3 border-2 border-gray-300 relative mb-4">
 </div>
 <p className="text-left ml-8">improvise with other background colors
 </p>
</div>

<div className="flex flex-col w-1/4 items-center">
<div className="box px-4 align-middle rounded-full uxw-bg-success text-center mt-2 font-extrabold text-white w-1/4 mb-4 mr-40">✓ Do</div>

 <div className="flex flex-row mb-4 rounded-md mr-16">
   <div className="box h-16 w-32 ml-28 mr-4 pt-4 rounded-md uxw-bg-steel-2 border-2 border-gray-300"></div>
   <div className="flex-col">
   <div className="box h-4 w-8 rounded-sm uxw-bg-steel-1 border-2 border-gray-300"></div>
   <div className="box h-4 w-8 mt-2 rounded-sm uxw-bg-merlins-beard-1 border-2 border-gray-300"></div>
   <div className="box h-4 w-8 mt-2 rounded-sm uxw-bg-acid-2 border-2 border-gray-300"></div>
   </div>
 </div>

 <p className="text-left">use background colors as a base</p>

</div>


</div>

        


       

        

      </UXWSubsection>

      </UXWSubsection>

    </div>
    

      
    


  );
}
