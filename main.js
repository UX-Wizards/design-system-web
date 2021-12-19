{
  const { AppBar, ClickAwayListener, Drawer, Tabs, Tab, Toolbar, Tooltip } = window['MaterialUI'];
  const { Box, Fab } = window['MaterialUI'];
  const { List, ListItem, ListItemText } = window['MaterialUI'];
  const { makeStyles } = window['MaterialUI'];
  const {
    HashRouter: Router,
    Switch,
    Redirect,
    Route,
    Link: RouterLink,
    useLocation,
  } = window["ReactRouterDOM"];
  const Prism = window["Prism"];
  const { useInView } = window["ReactIntersectionObserver"]
  const { configureStore } = window["RTK"]
  const { Provider, useSelector } = window["ReactRedux"]

  const { useEffect, useRef, useState } = window['React'];

  const fabCopy = {
    position: "absolute",
    bottom: "16px",
    right: "16px",
    outline: "none",
    backgroundColor: "#E6E6E6",
  }

  const useStylesMain = makeStyles({
    topappbar: {
      backgroundColor: "#152145",
      zIndex: 1201,
      fontFamily: "Overpass",
    },
    codesnippettab: {
      opacity: 1,
      minWidth: "50%",
      color: "#152145",
      fontWeight: 600,
      backgroundColor: "#C9CACB",
      fontFamily: "Overpass",
      "&:focus": {
        outline: "none",
      }
    },
    codesnippettabselected: {
      opacity: 1,
      minWidth: "50%",
      color: "#152145",
      fontWeight: 600,
      backgroundColor: "#E6E6E6",
      fontFamily: "Overpass",
      "&:focus": {
        outline: "none",
      }
    },
    navitem: {
      color: "#152145",
      fontWeight: 300,
    },
    navitemselected: {
      color: "#152145",
      fontWeight: 800,
    },
    fromtop: {
      marginTop: "33px",
    }
  })

  const useStylesDrawer = makeStyles({
    root: {
      fontFamily: "Overpass",
    },
    paper: {
      width: "28ch",
    }
  })

  const useStylesPanelSelect = makeStyles({
    colorPrimary: {
      backgroundColor: "#5267A7",
    }
  })

  const initialNavState = []
  const addNavAction = anchor => ({ type: "addVisibleNav", payload: anchor })
  const removeNavAction = anchor => ({ type: "removeVisibleNav", payload: anchor })
  const clearNavAction = () => ({ type: "clearVisibleNav" })
  const navReducer = (state = initialNavState, action) => {
    switch (action.type) {
      case "addVisibleNav": {
        return state.findIndex((element) => action.payload == element) != -1 ? state : state.concat(action.payload)
      }
      case "removeVisibleNav": {
        return state.filter((anchor) => action.payload != anchor)
      }
      case "clearVisibleNav": {
        return []
      }
      default:
        return state
    }
  }

  const reduxStore = configureStore({
    reducer: {
      navVisibility: navReducer
    }
  })

  const dswContent = [
    {
      heading: "Introduction",
      subheadings: [
        {
          subtitle: "Installation and Usage",
          anchor: "introduction--installation-and-usage",
        }
      ],
      route: "/introduction",
      component: <UXWIntroduction />,
    },
    {
      heading: "Who We Are",
      subheadings: [
        {
          subtitle: "About Us",
          anchor: "about--about",
        },
        {
          subtitle: "Our Mission",
          anchor: "about--mission"
        },
        {
          subtitle: "Personality",
          anchor: "about--personality"
        },
        {
          subtitle: "Values",
          anchor: "about--values"
        },
        {
          subtitle: "Contributors",
          anchor: "about--wizards"
        }
      ],
      route: "/about",
      component: <UXWWhoWeAre />,
    },
    
    {
      heading: "How We Sound",
      subheadings: [
        {
          subtitle: "Reference",
          anchor: "voice--ref",
        },
        {
          subtitle: "Voice",
          anchor: "voice--voice",
        },
        {
          subtitle: "Tone",
          anchor: "voice--tone"
        },
        {
          subtitle: "Styling Tips",
          anchor: "voice--styling"
        },
      ],
      route: "/voice",
      component: <UXWHowWeSound />,
    },
    
    {
      heading: "Logos and Icons",
      subheadings: [
        {
          subtitle: "Logos",
          anchor: "snav-logos",
        },
        {
          subtitle: "Primary Logo",
          anchor: "snav-primary-logo",
        },
        {
          subtitle: "Monotone Logos",
          anchor: "snav-monotone-logo",
        },
        {
          subtitle: "Word Mark",
          anchor: "snav-word-mark",
        },
        {
          subtitle: "Clearance",
          anchor: "snav-clearance",
        },
        {
          subtitle: "Icon Style",
          anchor: "snav-icongraphy",
        },
        {
          subtitle: "Downloads",
          anchor: "snav-library",
        },
      ],
      route: "/logos",
      component: <UXWLogosAndIcons />,
    },
    {
      heading: "Colors",
      subheadings: [
        {
          subtitle: "Our Thinking",
          anchor: "colors--thinking",
        },

        {
          subtitle: "Using Our Palette",
          anchor: "colors--palette",
        },

        {
          subtitle: "Primary Colors",
          anchor: "colors--primary",
        },

        {
          subtitle: "Secondary Colors",
          anchor: "colors--secondary",
        },

        {
          subtitle: "Accent Colors",
          anchor: "colors--accent",
        },
      ],
      route: "/colors",
      component: <UXWColors />,
    },
    {
      heading: "Typography",
      subheadings: [
        {
          subtitle: "Font",
          anchor: "typography--font",
        },
        {
          subtitle: "Scale",
          anchor: "typography--scale",
        },
        {
          subtitle: "Guidelines",
          anchor: "typography--guidelines",
        },
        {
          subtitle: "Usage",
          anchor: "typography--usage",
        }
      ],
      route: "/typography",
      component: <UXWTypography />,
    },
    {
      heading: "Component",
      subheadings: [
        {
          subtitle: "Getting Started",
          anchor: "#",
        },
        {
          subtitle: "Color Class",
          anchor: "color-class",
        },
        {
          subtitle: "Buttons",
          anchor: "button",
        },
        {
          subtitle: "Card",
          anchor: "card",
        },
      ],
      route: "/component",
      component: <UXWComponent />,
    },
    {
      heading: "Color Class",
      subheadings: [
        {
          subtitle: "",
          anchor: "#",
        },
      ],
      route: "/colorclass",
      component: <UXWColorClass />,
    },
    {
      heading: "Button",
      subheadings: [
        {
          subtitle: "",
          anchor: "#",
        },
      ],
      route: "/button",
      component: <UXWButton />,
    },
    {
      heading: "Card",
      subheadings: [
        {
          subtitle: "",
          anchor: "#",
        },
      ],
      route: "/card",
      component: <UXWCard />,
    },
  ];


  function TabPanel(props) {
    const { children, value, index, height, ...other } = props;

    return (
      <div
        role="tabpanel"
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box className="uxw-bg-steel-2" px={3} py={1} style={{minHeight: `${height * 4}ex`}} dangerouslySetInnerHTML={{__html: children}} />
        )}
      </div>
    );
  }

  function processRawCodeBlock(snippet, lang) {
    const spaceArray = []

    for (let line of snippet.split("\n")) {
      let spaces = line.match(/^\s+/)
      spaceArray.push(spaces ? spaces[0].length : 0)
    }

    let finalSnippet = ""

    let prismSnippet = ""
    if (lang === "html") {
      prismSnippet = Prism.highlight(snippet, Prism.languages.markup, 'markup');
    } else if (lang === "css") {
      prismSnippet = Prism.highlight(snippet, Prism.languages.css, 'css');
    }

    let i = 0
    for (let line of prismSnippet.split("\n")) {
      let spaces = ""
      for (let j = 0; j < spaceArray[i] - 1; j++) {
        spaces = spaces + "&nbsp;"
      }
      finalSnippet = finalSnippet + spaces + line + "<br/>"
      i = i + 1
    }

    return finalSnippet
  }

  function UXWCodePanelSingle(props) {
    const snippet = props.children
    const [open, setOpen] = useState(false);

    const finalSnippet = processRawCodeBlock(snippet, props.lang)

    const onCopyClick = () => {
      navigator.clipboard.writeText(snippet)
      setOpen(true)
    }

    return (
      <div className="w-128 relative">
        <Box className="uxw-bg-steel-2" style={{fontFamily: "monospace"}} p={3} dangerouslySetInnerHTML={{__html: finalSnippet}} />
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={() => setOpen(false)}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="Copied!"
          >
            <Fab style={fabCopy} size="small" onClick={onCopyClick}>
              <i className="bi bi-clipboard" style={{color: "#6331FD"}}></i>
            </Fab>
          </Tooltip>
        </ClickAwayListener>
      </div>
    );
  }

  function UXWCodePanelHTMLCSS(props) {
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const classesTopPanel = useStylesPanelSelect();
    const classesMain = useStylesMain();

    const htmlSnippet = props.children[0].props.children
    const cssSnippet = props.children[1].props.children

    let maxTextWidth = 0
    let maxTextHeight = Math.max(htmlSnippet.split("\n").length, cssSnippet.split("\n").length)

    for (let line of htmlSnippet.split("\n")) {
      maxTextWidth = line.length > maxTextWidth ? line.length : maxTextWidth
    }
    for (let line of cssSnippet.split("\n")) {
      maxTextWidth = line.length > maxTextWidth ? line.length : maxTextWidth
    }

    const finalHtmlSnippet = processRawCodeBlock(htmlSnippet, "html")
    const finalCssSnippet = processRawCodeBlock(cssSnippet, "css")

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const onCopyClick = () => {
      if (value == 0) {
        navigator.clipboard.writeText(htmlSnippet)
      } else if (value == 1) {
        navigator.clipboard.writeText(cssSnippet)
      }
      setOpen(true)
    }

    const codeStyle = {
      fontFamily: "monospace",
    }

    if (props.noWrap) {
      codeStyle.minWidth = `${maxTextWidth + 10}ch`
    }

    return (
      <div className="relative">
        <AppBar position="static" classes={{colorPrimary: classesTopPanel.colorPrimary}}>
          <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {backgroundColor: "#ED6F85", minHeight: "6px"}}}>
            <Tab label="HTML" className={value === 0 ? classesMain.codesnippettabselected : classesMain.codesnippettab} />
            <Tab label="CSS" className={value === 1 ? classesMain.codesnippettabselected : classesMain.codesnippettab} />
          </Tabs>
        </AppBar>
          <div style={codeStyle}>
            <TabPanel value={value} index={0} height={maxTextHeight} >
              {finalHtmlSnippet}
            </TabPanel>
            <TabPanel value={value} index={1} height={maxTextHeight} >
              {finalCssSnippet}
            </TabPanel>
          </div>
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={() => setOpen(false)}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="Copied!"
          >
            <Fab style={fabCopy} size="small" onClick={onCopyClick}>
              <i className="bi bi-clipboard" style={{color: "#6331FD"}}></i>
            </Fab>
          </Tooltip>
        </ClickAwayListener>
      </div>
    );
  }

  function UXWSubsection({title, anchor, children}) {
    const ref = React.useRef();
    const isInView = useInView(ref, { threshold: 0 })

    React.useEffect(() => {
      if (isInView) {
        reduxStore.dispatch(addNavAction(anchor))
      } else {
        reduxStore.dispatch(removeNavAction(anchor))
      }
    }, [isInView])

    return (
      <React.Fragment>
        <div ref={ref} className="mb-8">
          <h2 className="uxw-text-display-3 py-4" id={anchor}>{title}</h2>
          {children}
        </div>
      </React.Fragment>
    )
  }

  function NextSectionLink(props) {
    if (props.index >= dswContent.length - 1)
    {
      return null;
    }
    var next = dswContent[props.index + 1];
    return (
      <div className="container text-right pt-16">
        <p className="uxw-text-meta">Next</p>
        <RouterLink to={next.route}>{next.heading}</RouterLink>
      </div>
    );
  }

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({top:0,left:0, behavior: "smooth"});
    }, [pathname]);

    return null;
  }

  function Main(props) {
    const location = useLocation();
    const activeSubsections = useSelector((state) => state.navVisibility)

    const classesMain = useStylesMain();
    const classesDrawer = useStylesDrawer();

    return (
      <div className="bg-white">
        <React.Fragment>
          <AppBar position="fixed" className={classesMain.topappbar}>
            <Toolbar>
              <div className="flex flex-row flex-shrink-0 items-center">
                <img className="w-12 h-12" src="logo.png" />
                <div className="pl-4 text-lg">Design System</div>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" classes={{root: classesDrawer.root, paper: classesDrawer.paper}} >
            <Toolbar className={classesMain.fromtop}/> {/* Spacer */}
            <nav>
              <List>
                  <React.Fragment key="navlink-fragment-0">
                    <RouterLink to="/introduction" >
                      <ListItem button key="navlink-0">
                        <ListItemText disableTypography primary="Introduction" className={`pl-4 ${location.pathname === "/introduction" ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </RouterLink>
                    {location.pathname === "/introduction" &&
                    <div key="navlink-sub-0-0" onClick={() => document.getElementById("introduction--installation-and-usage").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Installation and Usage" className={`pl-12 ${activeSubsections.findIndex((element) => element === "introduction--installation-and-usage") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                  </React.Fragment>
                  <React.Fragment key="navlink-fragment-1">
                    <RouterLink to="/about" >
                      <ListItem button key="navlink-1">
                        <ListItemText disableTypography primary="Who We Are" className={`pl-4 ${location.pathname === "/about" ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </RouterLink>
                    {location.pathname === "/about" &&
                    <div key="navlink-sub-1-0" onClick={() => document.getElementById("about--about").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="About Us" className={`pl-12 ${activeSubsections.findIndex((element) => element === "about--about") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                    {location.pathname === "/about" &&
                    <div key="navlink-sub-1-1" onClick={() => document.getElementById("about--mission").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Our Mission" className={`pl-12 ${activeSubsections.findIndex((element) => element === "about--mission") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                    {location.pathname === "/about" &&
                    <div key="navlink-sub-1-2" onClick={() => document.getElementById("about--personality").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Personality" className={`pl-12 ${activeSubsections.findIndex((element) => element === "about--personality") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                    {location.pathname === "/about" &&
                    <div key="navlink-sub-1-3" onClick={() => document.getElementById("about--values").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Values" className={`pl-12 ${activeSubsections.findIndex((element) => element === "about--values") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                    {location.pathname === "/about" &&
                    <div key="navlink-sub-1-4" onClick={() => document.getElementById("about--wizards").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Contributors" className={`pl-12 ${activeSubsections.findIndex((element) => element === "about--wizards") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                  </React.Fragment>
                  <React.Fragment key="navlink-fragment-2">
                    <RouterLink to="/voice" >
                      <ListItem button key="navlink-2">
                        <ListItemText disableTypography primary="How We Sound" className={`pl-4 ${location.pathname === "/voice" ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </RouterLink>
                    {location.pathname === "/voice" &&
                    <div key="navlink-sub-2-0" onClick={() => document.getElementById("voice--ref").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Reference" className={`pl-12 ${activeSubsections.findIndex((element) => element === "voice--ref") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                    {location.pathname === "/voice" &&
                    <div key="navlink-sub-2-1" onClick={() => document.getElementById("voice--voice").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Voice" className={`pl-12 ${activeSubsections.findIndex((element) => element === "voice--voice") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                    {location.pathname === "/voice" &&
                    <div key="navlink-sub-2-2" onClick={() => document.getElementById("voice--tone").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Tone" className={`pl-12 ${activeSubsections.findIndex((element) => element === "voice--tone") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                    {location.pathname === "/voice" &&
                    <div key="navlink-sub-2-3" onClick={() => document.getElementById("voice--styling").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Styling Tips" className={`pl-12 ${activeSubsections.findIndex((element) => element === "voice--styling") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                  </React.Fragment>
                  <React.Fragment key="navlink-fragment-3">
                    <RouterLink to="/logos" >
                      <ListItem button key="navlink-3">
                        <ListItemText disableTypography primary="Logos and Icons" className={`pl-4 ${location.pathname === "/logos" ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </RouterLink>
                    {location.pathname === "/logos" &&
                    <div key="navlink-sub-3-0" onClick={() => document.getElementById("snav-logos").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Logos" className={`pl-12 ${activeSubsections.findIndex((element) => element === "snav-logos") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                    {location.pathname === "/logos" &&
                    <div key="navlink-sub-3-1" onClick={() => document.getElementById("snav-primary-logo").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Primary Logo" className={`pl-12 ${activeSubsections.findIndex((element) => element === "snav-primary-logo") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                    {location.pathname === "/logos" &&
                    <div key="navlink-sub-3-2" onClick={() => document.getElementById("snav-monotone-logo").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Monotone Logos" className={`pl-12 ${activeSubsections.findIndex((element) => element === "snav-monotone-logo") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                    {location.pathname === "/logos" &&
                    <div key="navlink-sub-3-3" onClick={() => document.getElementById("snav-word-mark").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Word Mark" className={`pl-12 ${activeSubsections.findIndex((element) => element === "snav-monotone-logo") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                     {location.pathname === "/logos" &&
                    <div key="navlink-sub-3-4" onClick={() => document.getElementById("snav-clearance").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Clearance" className={`pl-12 ${activeSubsections.findIndex((element) => element === "snav-clearance") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                    {location.pathname === "/logos" &&
                    <div key="navlink-sub-3-5" onClick={() => document.getElementById("snav-icongraphy").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Icon Style" className={`pl-12 ${activeSubsections.findIndex((element) => element === "snav-icongraphy") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                    {location.pathname === "/logos" &&
                    <div key="navlink-sub-3-6" onClick={() => document.getElementById("snav-library").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Downloads" className={`pl-12 ${activeSubsections.findIndex((element) => element === "snav-library") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                  </React.Fragment>
                  <React.Fragment key="navlink-fragment-4">
                    <RouterLink to="/colors" >
                      <ListItem button key="navlink-4">
                        <ListItemText disableTypography primary="Colors" className={`pl-4 ${location.pathname === "/colors" ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </RouterLink>
                    {location.pathname === "/colors" &&
                    <div key="navlink-sub-4-0" onClick={() => document.getElementById("colors--thinking").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Our Thinking" className={`pl-12 ${activeSubsections.findIndex((element) => element === "colors--thinking") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                    {location.pathname === "/colors" &&
                    <div key="navlink-sub-4-1" onClick={() => document.getElementById("colors--palette").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Using Our Palette" className={`pl-12 ${activeSubsections.findIndex((element) => element === "colors--palette") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                      {location.pathname === "/colors" &&
                    <div key="navlink-sub-4-2" onClick={() => document.getElementById("colors--primary").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Primary Colors" className={`pl-12 ${activeSubsections.findIndex((element) => element === "colors--primary") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                    {location.pathname === "/colors" &&
                    <div key="navlink-sub-4-3" onClick={() => document.getElementById("colors--secondary").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Secondary Colors" className={`pl-12 ${activeSubsections.findIndex((element) => element === "colors--secondary") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                    {location.pathname === "/colors" &&
                    <div key="navlink-sub-4-4" onClick={() => document.getElementById("colors--accent").scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary="Accent Colors" className={`pl-12 ${activeSubsections.findIndex((element) => element === "colors--accent") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    }
                    </React.Fragment>
                    <React.Fragment key="navlink-fragment-5">
                    <RouterLink to="/component" >
                      <ListItem button key="navlink-5">
                        <ListItemText disableTypography primary="Component" className={`pl-4 ${location.pathname === "/component" ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </RouterLink>
                    {location.pathname === "/component" &&
                    <RouterLink key="navlink-sub-5-1"  to="/colorclass" >
                      <ListItem button>
                        <ListItemText disableTypography primary="Color Classes" className={`pl-12 ${activeSubsections.findIndex((element) => element === "color-calss") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </RouterLink>
                    }
                     {location.pathname === "/component" &&
                    <RouterLink key="navlink-sub-5-2"  to="/button" >
                      <ListItem button>
                        <ListItemText disableTypography primary="Buttons" className={`pl-12 ${activeSubsections.findIndex((element) => element === "button") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </RouterLink>
                    }
                    {location.pathname === "/component" &&
                    <RouterLink key="navlink-sub-5-3"  to="/card" >
                      <ListItem button>
                        <ListItemText disableTypography primary="Card" className={`pl-12 ${activeSubsections.findIndex((element) => element === "card") !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </RouterLink>
                    }
                    </React.Fragment>
              </List>
            </nav>
          </Drawer>
          <div className="flex">
            <main className="flex-grow ml-80 py-4 pr-8">
              <Toolbar className={classesMain.fromtop}/> {/* Spacer */}

              <Switch>
                <Route exact path="/">
                  <Redirect to="/introduction" />
                </Route>
                {dswContent.map(({ route, component, heading }, index) => {
                  return (
                    <Route key={`route-${index}`} path={route}>
                      <div className="flex-col flex-shrink-0 pb-8" style={{fontFamily: "Overpass", color: "#152145"}} key={`section-${index}`}>
                        <h1 className="pb-4 uxw-text-display-2">{heading}</h1>
                        {component}
                        <NextSectionLink index={index}/>
                      </div>
                    </Route>
                  )
                })}
              </Switch>
            </main>
          </div>
        </React.Fragment>
      </div>
    )
  }

  ReactDOM.render(
    <Provider store={reduxStore}>
      <Router>
        <ScrollToTop/>
        <Main />
      </Router>
    </Provider>
    ,
    document.getElementById('app')
  );
}
