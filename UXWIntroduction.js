function UXWIntroduction(props) {
  return (
    <div className="container">
      <div className="flex flex-row">
        <p className="md:w-4/5 pr-8">
          Lucas ipsum dolor sit amet carnor needa chazrach rebo sebulba plagueis finis di veknoid ventress.
          Maul lando vader sy hutt nomi. Gordin haruun bail jar. Fett mothma toydarian jerec greedo bothawui sesswenna artaru zuckuss.
          Nassau cerea sern naboo. Tagge leia obi-wan thennqora antilles. Davin selkath jobal tavion metalorn organa muunilinst jettster.
          jinn hutt ikrit vor. Bertroff kael hutt wharl oola dagobah bibble saleucami. Colton raioballo ansionian hapan billaba wampa organa.
          Greedo argazdan jinn tof verpine bothan wedge.
        </p>
        <div className="flex-grow"></div>
        <UXWCodePanel>
          <div>
{`<h1 class="uxw-h1">
    Hello World
</h1>
`}
          </div>
          <div>
{`.uxw-code {
    padding: 4;
    color: #ff0000;
}`}
          </div>
        </UXWCodePanel>
      </div>
      <UXWSubsection anchor="introduction--installation-and-usage" title="Installation and Usage">
        <p>
          Hello World.
        </p>
      </UXWSubsection>
    </div>
  )
}
