function UXWColorBlock(props) {
  const [hovered, setHovered] = useState(false);
  const [copyText, setCopyText] = useState("Copy HEX");

  const overlayStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    opacity: 1,
    // transition: ".5s ease",
    cursor: "pointer",
    //transform: "scale(1.1)"
  }

  const textCopyStyle = {
    color: props.copyHexColor,
    fontSize: "12px",
    fontWeight:"700",
    padding: "4px 8px",
    borderWidth:"2px",
    borderStyle:"solid",
    borderColor:props.copyHexColor,
    position: "absolute",
    top: "50%",
    left: "50%",
    // -webkit-transform: translate(-50%, -50%);
    // -ms-transform: translate(-50%, -50%);
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    opacity: 1
  }

  const grayBorderSwatch = {
    borderStyle:"solid",
    borderWidth: "2px",
    borderColor: "rgba(209,213,219,var(--tw-border-opacity))",
  }

  const mouseEnter = () => {
    setHovered(true);
  }

  const mouseLeave = () => {
    setHovered(false);
    setCopyText("Copy HEX");
  }

  const finalStyle = {...overlayStyle, visibility: hovered ? "visible" : "hidden"}
  const topClass = `colorswatch ${props.colorSymbol}`
  const swatchBorder = {...grayBorderSwatch, borderStyle: props.grayBorder == "gray" ? "solid" : "none"}
  

  return (
    <div>
      <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={topClass} style={swatchBorder}>
        {!hovered && (
          <div>
            <p className="text-left text-black pl-8 pt-5">
              <span className="font-bold">A </span>{props.copyHexColor == "black" ? "PASS" : "FAIL"}
            </p>
            <p className="text-left text-white pl-8">
              <span className="font-bold">A </span>{props.copyHexColor == "white" ? "PASS" : "FAIL"}
            </p>
          </div>
        )}
        <div style={finalStyle}>
          <div onClick={() => {
            navigator.clipboard.writeText(props.hexCode)
            setCopyText("HEX Copied")
          }} style={textCopyStyle}>{copyText}</div>
        </div>
      </div>
      <p>
        <span className="font-bold">{props.colorName}</span>
        <br></br>
        <span>HEX:</span>{" "}
        <span className="font-normal">{props.hexCode}</span>
      </p>
    </div>
  )
}


function UXWColors(props) {
  return (
    <div className="container">
      <p className="pb-8 max-w-prose italic">
        <br />
        This page provides a directory of available UX Wizards colors, and then
        color use guidelines to maintain consistency across UX Wizards-branded
        websites.
      </p>
      <div className="flex">
          <div className="flex flex-auto max-w-prose uxw-bg-steel-2 border-black rounded-md shadow-inner items-center justify-center italic py-6 px-12 mt-4 mb-16">
            <p>
            Each brand color’s <b>global token</b> is located under its color swatch. We use global tokens to simplify HEX value in order to maintain a consistent UI.   
            </p>
          </div>
        </div>

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
        <p className="pb-16 max-w-prose my-4">
          The flexible and neutral{" "}
          <span className="font-bold">Magician's Cloak</span>,
          <span className="font-bold"> Acid</span>, and{" "}
          <span className="font-bold">Merlin's Beard</span> lead the way.
          They're most often used as foundational elements of your UX Wizards
          designs.
        </p>
        <div className="flex mb-12">
          <UXWColorBlock colorSymbol="uxw-bg-magicians-cloak-1" colorName="magicianscloak-1" copyHexColor="white" hexCode="#152145"/>
          <UXWColorBlock colorSymbol="uxw-bg-magicians-cloak-2" colorName="magicianscloak-2" copyHexColor="white" hexCode="#4F66AD"/>
          <UXWColorBlock colorSymbol="uxw-bg-magicians-cloak-3" colorName="magicianscloak-3" copyHexColor="white" hexCode="#2B3D72"/>
        </div>
        <div className="flex mb-12">
          <UXWColorBlock colorSymbol="uxw-bg-acid-1" colorName="acid-1" copyHexColor="white" hexCode="#6331FD"/>
          <UXWColorBlock colorSymbol="uxw-bg-acid-2" colorName="acid-2" copyHexColor="black" hexCode="#D8CBFF"/>
          <UXWColorBlock colorSymbol="uxw-bg-acid-3" colorName="acid-3" copyHexColor="white" hexCode="#3F18B4"/>
          </div>
          <div className="flex mb-12">
          <UXWColorBlock colorSymbol="uxw-bg-merlins-beard-1" colorName="merlinsbeard-1" copyHexColor="black" hexCode="#FFFFFF" grayBorder="gray"/>
          <UXWColorBlock colorSymbol="uxw-bg-merlins-beard-2" colorName="merlinsbeard-2" copyHexColor="black" hexCode="#E6E6E6"/>
          <UXWColorBlock colorSymbol="uxw-bg-merlins-beard-3" colorName="merlinsbeard-3" copyHexColor="black" hexCode="#C9CACB"/>
          <UXWColorBlock colorSymbol="uxw-bg-merlins-beard-4" colorName="merlinsbeard-4" copyHexColor="white" hexCode="#737887"/>
        </div>
      </UXWSubsection>

      <hr className="pb-10"></hr>
      <UXWSubsection anchor="colors--secondary" title="Secondary Colors">
        <p className="pb-16 mt-4 max-w-prose">
          Use <span className="font-bold">Steel</span> and{" "}
          <span className="font-bold">Mana</span> as supporting tones to help
          build environments in your UXW content.
        </p>
        <div className="flex mb-12">
        <UXWColorBlock colorSymbol="uxw-bg-steel-1" colorName="steel-1" copyHexColor="black" hexCode="#E0E6FD"/>
        <UXWColorBlock colorSymbol="uxw-bg-steel-2" colorName="steel-2" copyHexColor="black" hexCode="#F7F9FF" grayBorder="gray"/>
        <UXWColorBlock colorSymbol="uxw-bg-steel-3" colorName="steel-3" copyHexColor="black" hexCode="#CCD5F5"/>
        </div>
        <div className="flex mb-12">
        <UXWColorBlock colorSymbol="uxw-bg-mana-1" colorName="mana-1" copyHexColor="black" hexCode="#00BBD6"/>
        <UXWColorBlock colorSymbol="uxw-bg-mana-2" colorName="mana-2" copyHexColor="black" hexCode="#24DDFD"/>
        <UXWColorBlock colorSymbol="uxw-bg-mana-3" colorName="mana-3" copyHexColor="white" hexCode="#299BB0"/>
        </div>
      </UXWSubsection>
      <hr className="pt-4 pb-8"></hr>
      <UXWSubsection anchor="colors--accent" title="Accent Colors">
        <p className="max-w-prose pb-12 mt-4">
          <span className="font-bold">Jinx</span> and{" "}
          <span className="font-bold">Elixir</span> should be used with
          restraint and finesse. Think of these colors as ways to draw
          attention to specific things on purpose.
        </p>
        <div className="flex mb-12">
        <UXWColorBlock colorSymbol="uxw-bg-jinx-1" colorName="jinx-1" copyHexColor="black" hexCode="#FF6584"/>
        <UXWColorBlock colorSymbol="uxw-bg-jinx-2" colorName="jinx-2" copyHexColor="black" hexCode="#FF6584"/>
        <UXWColorBlock colorSymbol="uxw-bg-jinx-3" colorName="jinx-3" copyHexColor="black" hexCode="#EA4869"/>
        </div>
        <div className="flex mb-12">
        <UXWColorBlock colorSymbol="uxw-bg-elixir-1" colorName="elixir-1" copyHexColor="black" hexCode="#F0B052"/>
        <UXWColorBlock colorSymbol="uxw-bg-elixir-2" colorName="elixir-2" copyHexColor="black" hexCode="#FFD190"/>
        <UXWColorBlock colorSymbol="uxw-bg-elixir-3" colorName="elixir-3" copyHexColor="black" hexCode="#D99432"/>
        </div>
      </UXWSubsection>

      <hr className="pt-4 pb-8"></hr>

      <UXWSubsection anchor="colors--usage" title="Use Guidelines">
        <p className="mt-8 pb-4">
          <a
            onClick={() =>
              document
                .getElementById("guidelines--text")
                .scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            Text
          </a>{" "}
          |{" "}
          <a
            onClick={() =>
              document
                .getElementById("guidelines--buttons")
                .scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            Buttons
          </a>{" "}
          |{" "}
          <a
            onClick={() =>
              document
                .getElementById("guidelines--backgrounds")
                .scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            Backgrounds
          </a>{" "}
          |{" "}
          <a
            onClick={() =>
              document
                .getElementById("guidelines--borders")
                .scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            Borders and Lines
          </a>{" "}
          |{" "}
          <a
            onClick={() =>
              document
                .getElementById("guidelines--accents")
                .scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            Accents
          </a>{" "}
          |{" "}
          <a
            onClick={() =>
              document
                .getElementById("guidelines--semantics")
                .scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            Error and Success
          </a>{" "}
          |{" "}
          <a
            onClick={() =>
              document
                .getElementById("colors--dodont")
                .scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            Don't/Do
          </a>
        </p>

        <div className="flex flex-col max-w-prose uxw-bg-steel-2 border-black rounded-md shadow-inner italic py-6 px-12 mt-8 mb-16">
          <p className="text-left">
            "[Constraints] provide the guardrails that keep your team grounded
            and aligned. Creativity thrives in constraints."
          </p>
          <br />
          <p className="text-right">
            Gothelf and Sieden, <span className="underline">Lean UX</span>
          </p>
        </div>

        <div className="max-w-prose">
          <p className="pb-8 mt-4">
            Use these color guidelines to ground the interactive elements on our
            UX Wizards branded webpages in a consistent look and feel. With
            these basic guardrails in place, there is lots of room for creative
            exploration!
          </p>

          <p className="pb-12">
            These guidelines are intended to streamline choices when building UX
            Wizards webpage elements. For graphics, you are encouraged to use UX
            Wizards colors according to your eye and the general guidelines
            provided in the preceeding sections.
          </p>
        </div>

        <UXWSubsection anchor="guidelines--accessibility" title="Accessibility">
          <div className="max-w-prose">
            <p className="pb-12 mt-4">
              It’s important that users can see the content in our UX Wizards
              pages. Ideally, your color contrast ratio should be at least
              7.2:1. At a minimum, aim for 6:1. You can always use the{" "}
              <a
                href="https://webaim.org/resources/contrastchecker/"
                title="Go to WebAIM's contrast checker"
              >
                WebAIM contrast checker
              </a>{" "}
              to check the contrast ratios in your designs.
            </p>
          </div>
        </UXWSubsection>

        <UXWSubsection
          anchor="guidelines--inaction"
          title="Use Guidelines in Action"
        >
          <div className="mt-4 pb-16 w-10/12">
            <img 
              src="assets/guidelines-inaction.svg"
              alt="A sample UX Wizards web page"
            ></img>
          </div>
        </UXWSubsection>

        <UXWSubsection anchor="guidelines--text" title="Text">
          <a name="text"></a>
          <div className="max-w-prose">
            <p className="pb-12 mt-4">
              Text is a way to communicate information to visitors. We always
              want to make sure that text is visible, legible, and clear. Please
              also refer to the{" "}
              <a
                href="https://designsystem.uxwizards.org/#/typography"
                title="Go to UXW Typography"
              >
                Typography
              </a>{" "}
              and{" "}
              <a
                href="https://designsystem.uxwizards.org/#/about"
                title="Go to UXW Who We Are"
              >
                Who We Are
              </a>{" "}
              sections for more guidance.
            </p>
          </div>
          <div className="flex mb-16">
            <div className="mr-16">
              <p className="font-bold mb-4">Main text</p>
              <div className="h-16 w-32 rounded-md uxw-bg-magicians-cloak-1 mb-4">
              </div>
              <p className="text-left">
                magicianscloak-1
                <br />
                HEX: #152145
              </p>
            </div>
            <div className="mr-16">
              <p className="font-bold mb-4">Link text</p>
              <div className="h-16 w-32 rounded-md uxw-bg-acid-1 mb-4">
              </div>
              <p className="text-left">
                acid-1
                <br />
                HEX: #6331FD
              </p>
            </div>
            <div className="mr-16">
              <p className="font-bold mb-4">Hovered link</p>
              <div className="h-16 w-32 rounded-md uxw-bg-acid-3 mb-4">
              </div>
              <p className="text-left">
                acid-3
                <br />
                HEX: #3F18B4
              </p>
            </div>
            <div className="mr-16">
              <p className="font-bold mb-4">Active link</p>
              <div className="h-16 w-32 rounded-md uxw-bg-mana-3 mb-4">
              </div>
              <p className="text-left">
                mana-3
                <br />
                HEX: #299BB0
              </p>
            </div>
          </div>
          <div className="flex mb-16">
            <div className="mr-16">
              <p className="font-bold mb-4 uxw-bg-merlins-beard-1 ">Button text</p>
              <div className="h-16 w-32 rounded-md uxw-bg-merlins-beard-1 border-solid border-2 border-gray-300 mb-4">
              </div>
              <p className="text-left">
                merlinsbeard-1
                <br />
                HEX: #FFFFFF
              </p>
            </div>
            <div className="mr-16 flex-none">
              <p className="font-bold mb-4">Disabled button text</p>
              <div className="h-16 w-32 rounded-md uxw-bg-merlins-beard-4 mb-4">
              </div>
              <p className="text-left">
                merlinsbeard-4
                <br />
                HEX: #737887
              </p>
            </div>
            <div className="mr-16">
              <p className="font-bold mb-4">Banner text</p>
              <div className="h-16 w-32 rounded-md uxw-bg-merlins-beard-1 border-solid border-2 border-gray-300 mb-4">
              </div>
              <p className="text-left">
                uxw-bg-merlins-beard-1
                <br />
                HEX: #FFFFFF
              </p>
            </div>
          </div>
        </UXWSubsection>

        <UXWSubsection anchor="guidelines--buttons" title="Buttons">
          <div className="mt-4 max-w-prose">
            <p className="pb-12 mt-4">
              Buttons communicate action potential. There are three states for
              buttons: standard, hovered, and disabled.
            </p>
          </div>
          <div className="flex mb-16">
            <div className="mr-16 flex-none">
              <p className="font-bold mb-4">Button (gradient)</p>
              <div className="h-16 w-32 rounded-md bg-gradient mb-4">
              </div>
              <p className="text-left">
                From: acid-1
                <br />
                HEX: #6331FD
                <br />
                <br />
                To: acid-3
                <br />
                HEX: #3F18B4
              </p>
            </div>
            <div className="mr-16">
              <p className="font-bold mb-4">Hovered button</p>
              <div className="h-16 w-32 rounded-md uxw-bg-acid-3 mb-4">
              </div>
              <p className="text-left">
                acid-3
                <br />
                HEX: #3F18B4
              </p>
            </div>
            <div className="mr-16">
              <p className="font-bold mb-4">Disabled button</p>
              <div className="h-16 w-32 rounded-md uxw-bg-merlins-beard-3 mb-4">
              </div>
              <p className="text-left">
                merlinsbeard-3
                <br />
                HEX: #C9CACB
              </p>
            </div>
            <div className="mr-16">
              <p className="font-bold mb-4">Button text</p>
              <div className="h-16 w-32 rounded-md uxw-bg-merlins-beard-1 border-2 border-gray-300 mb-4">
              </div>
              <p className="text-left">
                merlinsbeard-1
                <br />
                HEX: #FFFFFF
              </p>
            </div>
            <div className="mr-16 flex-none">
              <p className="font-bold mb-4">Disabled button text</p>
              <div className="h-16 w-32 rounded-md uxw-bg-merlins-beard-4 mb-4">
              </div>
              <p className="text-left">
                merlinsbeard-4
                <br />
                HEX: #737887
              </p>
            </div>
          </div>
        </UXWSubsection>

        <UXWSubsection anchor="guidelines--backgrounds" title="Backgrounds">
          <div className="mt-4 max-w-prose">
            <p className="pb-12 mt-4">
              These colors provide the airy, magical background that UX Wizards
              content floats on. Use them to create spaces, areas, and gradients
              that delight visitors and communicate grouping for different
              elements.
            </p>
          </div>
          <div className="flex mb-16">
            <div className="mr-16">
              <div className="h-16 w-32 rounded-md uxw-bg-merlins-beard-1 border-2 border-gray-300 mb-4">
              </div>
              <p className="text-left">
                merlinsbeard-1
                <br />
                HEX: #FFFFFF
              </p>
            </div>
            <div className="mr-16">
              <div className="h-16 w-32 rounded-md uxw-bg-acid-1 uxw-bg-steel-2 border-2 border-gray-300 mb-4">
              </div>
              <p className="text-left">
                steel-2
                <br />
                HEX: #F7F9FF
              </p>
            </div>
            <div className="mr-16">
              <div className="h-16 w-32 rounded-md uxw-bg-steel-1 mb-4">
              </div>
              <p className="text-left">
                steel-1
                <br />
                HEX: #E0E6FD
              </p>
            </div>
            <div className="mr-16">
              <div className="h-16 w-32 rounded-md uxw-bg-acid-2 mb-4">
              </div>
              <p className="text-left">
                acid-2
                <br />
                HEX: #D8CBFF
              </p>
            </div>
          </div>

          <div className="mt-4 max-w-prose">
            <p className="pb-12 mt-4">
              If you choose to use a top banner, like the one on the UX Wizards
              Design system, use Magician’s Cloak for the background.
            </p>
          </div>
          <div className="mr-16">
            <div className="h-16 w-32 rounded-md uxw-bg-magicians-cloak-1 mb-4">
            </div>
            <p className="text-left">
              magicianscloak-1
              <br />
              HEX: #152145
            </p>
          </div>
        </UXWSubsection>
        <UXWSubsection anchor="guidelines--borders" title="Borders and Lines">
          <div className="mt-4 max-w-prose">
            <p className="pb-12 mt-4">
              When an element needs to be outlined to be seen, or for dividers
              and spacers on lists, UX Wizards sites use a singular color to
              maintain consistency.
            </p>
          </div>
          <div className="flex mb-16">
            <div className="mr-16">
              <div className="h-16 w-32 rounded-md uxw-bg-merlins-beard-3 mb-4">
              </div>
              <p className="text-left">
                merlinsbeard-3
                <br />
                HEX: #C9CACB
              </p>
            </div>
          </div>
        </UXWSubsection>
        <UXWSubsection anchor="guidelines--accents" title="Accents">
          <div className="mt-4 max-w-prose pr-12">
            <p className="pb-12 mt-4">
              Use these colors to draw attention to highlighted elements on the
              page, such as selected tabs.
            </p>
          </div>
          <div className="flex mb-16">
            <div className="mr-16">
              <div className="h-16 w-32 rounded-md uxw-bg-jinx-1 mb-4">
              </div>
              <p className="text-left">
                jinx-1
                <br />
                HEX: #FF6584
              </p>
            </div>
            <div className="mr-16">
              <div className="h-16 w-32 rounded-md uxw-bg-elixir-1 mb-4">
              </div>
              <p className="text-left">
                elixir-1
                <br />
                HEX: #F0B052
              </p>
            </div>
          </div>
        </UXWSubsection>
        <UXWSubsection anchor="guidelines--semantics" title="Error and Success">
          <div className="mt-4 max-w-prose bg-transparent">
            <p className="pb-12 mt-4">
              These colors communicate success and error states, and are likely
              to be found in form fields.
            </p>
          </div>
          <div className="flex mb-16">
            <div className="mr-16">
              <div className="h-16 w-32 rounded-md uxw-bg-error mb-4">
              </div>
              <p className="text-left">
                error-red
                <br />
                HEX: #EA3434
              </p>
            </div>
            <div className="mr-16">
              <div className="h-16 w-32 rounded-md uxw-bg-success mb-4">
              </div>
              <p className="text-left">
                success-green
                <br />
                HEX: #1CCB6C
              </p>
            </div>
          </div>
        </UXWSubsection>

        <UXWSubsection anchor="colors--dodont" title="Don't and Do">
          <div className="flex flex-col max-w-prose uxw-bg-steel-2 border-black rounded-md shadow-inner italic py-6 px-12 mt-8 mb-12">
            <p className="italic">
              Remember to aim for 7.2:1 as your standard for accessible color
              combinations. To test your colors, visit{" "}
              <a
                href="https://webaim.org/resources/contrastchecker/"
                title="Go to WebAIM's contrast checker"
              >
                WebAIM
              </a>
              .
            </p>
          </div>

          <div className="max-w-prose">
            <p className="pb-16">
              Use these color guidelines to ground the interactive elements on
              our UX Wizards branded webpages in a consistent look and feel.
              With these basic guardrails in place, there is lots of room for
              creative exploration!
            </p>
          </div>

          <div className="flex mb-16">
            <div className="mr-16">
              <div className="doanddont bg-gradient mb-4">
                <p className="txt-center">
                  Button
                </p>
              </div>
              <div className="rounded-full uxw-bg-error text-center font-extrabold text-white mb-4 mr-40">
                  ✗ Don't
              </div>
              <p className="w-48">
                Use any other colors for button text
              </p>
            </div>
            <div>
              <div className="doanddont bg-gradient mb-4">
                <p className="txt-center text-white">
                  Button
                </p>
              </div>
              <div className="rounded-full uxw-bg-success text-center font-extrabold text-white mb-4 mr-40">
              ✓ Do
              </div>
              <p className="w-48">
              Use white text on buttons
              </p>
            </div>
          </div>
          <div className="flex mb-16">
            <div className="mr-16">
              <div className="doanddont bg-gradient mb-4">
                <p className="text-white txt-center">
                  Join <span className="booty">us!</span>
                </p>
              </div>
              <div className="rounded-full uxw-bg-error text-center font-extrabold text-white mb-4 mr-40">
                  ✗ Don't
              </div>
              <p className="w-48">
              Combine text colors on buttons
              </p>
            </div>
            <div>
              <div className="doanddont uxw-bg-merlins-beard-3 mb-4">
                <p className="txt-center">
                  Button
                </p>
              </div>
              <div className="rounded-full uxw-bg-success text-center font-extrabold text-white mb-4 mr-40">
              ✓ Do
              </div>
              <p className="w-48">
              Use greys for disabled states
              </p>
            </div>
          </div>
          <div className="flex mb-16">
            <div className="mr-16">
              <div className="doanddont uxw-bg-steel-2 border-2 border-gray-300 mb-4">
                <p className="riches txt-center">
                  UX Wizards
                </p>
              </div>
              <div className="rounded-full uxw-bg-error text-center font-extrabold text-white mb-4 mr-40">
                  ✗ Don't
              </div>
              <p className="w-48">
              Pick unauthorized text colors
              </p>
            </div>
            <div className="mr-16">
              <div className="doanddont uxw-bg-steel-2 border-2 border-gray-300 mb-4">
                <p className="txt-center">
                  UX Wizards
                </p>
              </div>
              <div className="rounded-full uxw-bg-success text-center font-extrabold text-white mb-4 mr-40">
              ✓ Do
              </div>
              <p className="w-48">
              Make sure there is enough contrast for text
              </p>
            </div>
          </div>
          <div className="flex mb-16">
            <div className="mr-16">
              <div className="doanddont uxw-bg-jinx-1 mb-4">
              <div class="w-24 h-10 uxw-bg-steel-2 rounded-md absolute bottom-3 right-3"></div>
              </div>
              <div className="rounded-full uxw-bg-error text-center font-extrabold text-white mb-4 mr-40">
                  ✗ Don't
              </div>
              <p className="w-48">
              Use an accent as a background color
              </p>
            </div>
            <div className="mr-16">
              <div className="doanddont uxw-bg-steel-2 border-2 border-gray-300 mb-4">
              <div class="w-24 h-10 uxw-bg-jinx-1 rounded-md absolute bottom-3 right-3"></div>
              </div>
              <div className="rounded-full uxw-bg-success text-center font-extrabold text-white mb-4 mr-40">
              ✓ Do
              </div>
              <p className="w-48">
              Use an accent as a highlight
              </p>
            </div>
          </div>
          <div className="flex mb-16">
            <div className="mr-16">
              <div className="doanddont uxw-bg-mana-3 mb-4">
              </div>
              <div className="rounded-full uxw-bg-error text-center font-extrabold text-white mb-4 mr-40">
                  ✗ Don't
              </div>
              <p className="w-48">
              Improvise with other background colors
              </p>
            </div>
            <div className="mr-16">
              <div className="doanddont uxw-bg-steel-2 mb-4">
                <div class="grid grid-cols-2 grid-rows-2 gap-2">
                  <div class="h-11 w-full rounded-md uxw-bg-steel-2 border-2 border-gray-300">
                  </div>
                  <div class="h-11 w-full rounded-md uxw-bg-steel-1 border-2 border-gray-300">
                  </div>
                  <div class="h-11 w-full rounded-md uxw-bg-merlins-beard-1 border-2 border-gray-300">
                  </div>
                  <div class="h-11 w-full rounded-md uxw-bg-acid-2 border-2 border-gray-300">
                  </div>
                </div>
              </div>
              <div className="rounded-full uxw-bg-success text-center font-extrabold text-white mb-4 mr-40">
              ✓ Do
              </div>
              <p className="w-48">
              Use background colors as a base
              </p>
            </div>
          </div>
        </UXWSubsection>
      </UXWSubsection>
    </div>
  );
}
