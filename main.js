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
          subtitle: "Primary Logoance",
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
      ],
      route: "/typography",
      component: <UXWTypography />,
    },
    {
      heading: "Brand Guide",
      subheadings: [],
      route: "/brandguide",
      component: <UXWBrandGuide />,
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
        <div ref={ref}>
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
                {dswContent.map(({ heading, subheadings, route }, index) => (
                  <React.Fragment key={`navlink-fragment-${index}`}>
                    <RouterLink to={route} >
                      <ListItem button key={`navlink-${index}`}>
                        <ListItemText disableTypography primary={heading} className={`pl-4 ${location.pathname === route ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </RouterLink>
                    {subheadings.map(({subtitle, anchor}, subindex) => (location.pathname === route &&
                    <div key={`navlink-sub-${index}-${subindex}`} onClick={() => document.getElementById(anchor).scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary={subtitle} className={`pl-12 ${activeSubsections.findIndex((element) => element === anchor) !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
                      </ListItem>
                    </div>
                    ))}
                  </React.Fragment>
                ))}
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
