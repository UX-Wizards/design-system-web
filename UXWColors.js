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
        <p className="pb-12 max-w-prose">
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
        <p className="my-4">
          The flexible and neutral{" "}
          <span className="font-bold">Magician's Cloak</span>,
          <span className="font-bold"> Acid</span>, and{" "}
          <span className="font-bold">Merlin's Beard</span> lead the way.
          They're most often used as foundational elements of your UX Wizards
          designs.
        </p>

        <div className="flex flex-row">
          <div className="flex flex-auto w-2/3 uxw-bg-steel-2 border-black rounded-md shadow-inner items-center justify-center py-4 px-2 mt-4 mb-16">
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
          <p className="pb-16 max-w-prose">
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
                      <span className="font-normal"># 1F9BB1</span>
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
          <p className="pb-12">
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
    </div>
  );
}
